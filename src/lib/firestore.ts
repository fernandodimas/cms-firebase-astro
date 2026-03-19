/**
 * Utilitário para buscar o documento CMS do Firestore no build time.
 *
 * REGRA DA SKILL:
 * - Uma única leitura Firestore por build = um único documento.
 * - Sem subcoleções, sem múltiplas queries.
 * - Em desenvolvimento (sem variável FIRESTORE_DOCUMENT_PATH), usa sampleData.
 *
 * Configuração necessária (GitHub Actions secrets):
 *   GOOGLE_APPLICATION_CREDENTIALS — JSON da Service Account
 *   FIRESTORE_DOCUMENT_PATH        — ex: "sites/meu-site"
 */

import type { CMSDocument } from '@/types/cms';
import { sampleData } from '@/data/sampleData';

/**
 * Busca o documento CMS.
 * Em dev: retorna sampleData instantaneamente.
 * Em build/CI: lê do Firestore via Admin SDK.
 */
export async function getCMSDocument(): Promise<CMSDocument> {
  const documentPath = import.meta.env.FIRESTORE_DOCUMENT_PATH;

  // Modo desenvolvimento: usa dado local para evitar dependência de credenciais
  if (!documentPath) {
    console.info(
      '[CMS] Usando sampleData (FIRESTORE_DOCUMENT_PATH não definido)'
    );
    return sampleData;
  }

  try {
    // Importação dinâmica: firebase-admin só é necessário no build time
    const { initializeApp, getApps, cert } = await import(
      'firebase-admin/app'
    );
    const { getFirestore } = await import('firebase-admin/firestore');

    // Inicializa apenas uma vez (Astro pode chamar múltiplas vezes)
    if (!getApps().length) {
      // Em CI, GOOGLE_APPLICATION_CREDENTIALS aponta para o JSON da Service Account
      // (configurado como arquivo temporário pelo step do GitHub Actions)
      initializeApp({
        credential: cert(
          JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON ?? '{}')
        ),
      });
    }

    const db = getFirestore();

    // ✅ REGRA: exatamente 1 operação de leitura
    const snapshot = await db.doc(documentPath).get();

    if (!snapshot.exists) {
      throw new Error(
        `[CMS] Documento não encontrado no Firestore: ${documentPath}`
      );
    }

    return snapshot.data() as CMSDocument;
  } catch (error) {
    console.error('[CMS] Falha ao ler Firestore, usando sampleData:', error);
    return sampleData;
  }
}
