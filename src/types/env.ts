import { z } from 'zod';

export const ProviderEnvOverridesSchema = z.object({
  AI21_API_BASE_URL: z.string().optional(),
  AI21_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  ANTHROPIC_BASE_URL: z.string().optional(),
  AWS_BEDROCK_REGION: z.string().optional(),
  AZURE_API_BASE_URL: z.string().optional(),
  AZURE_API_HOST: z.string().optional(),
  AZURE_API_KEY: z.string().optional(),
  AZURE_AUTHORITY_HOST: z.string().optional(),
  AZURE_CLIENT_ID: z.string().optional(),
  AZURE_CLIENT_SECRET: z.string().optional(),
  AZURE_DEPLOYMENT_NAME: z.string().optional(),
  AZURE_EMBEDDING_DEPLOYMENT_NAME: z.string().optional(),
  AZURE_OPENAI_API_BASE_URL: z.string().optional(),
  AZURE_OPENAI_API_HOST: z.string().optional(),
  AZURE_OPENAI_API_KEY: z.string().optional(),
  AZURE_OPENAI_BASE_URL: z.string().optional(),
  AZURE_OPENAI_DEPLOYMENT_NAME: z.string().optional(),
  AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME: z.string().optional(),
  AZURE_TENANT_ID: z.string().optional(),
  AZURE_TOKEN_SCOPE: z.string().optional(),
  BAM_API_HOST: z.string().optional(),
  BAM_API_KEY: z.string().optional(),
  CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
  CLOUDFLARE_API_KEY: z.string().optional(),
  COHERE_API_KEY: z.string().optional(),
  COHERE_CLIENT_NAME: z.string().optional(),
  DATABRICKS_TOKEN: z.string().optional(),
  DATABRICKS_WORKSPACE_URL: z.string().optional(),
  FAL_KEY: z.string().optional(),
  GOOGLE_API_HOST: z.string().optional(),
  GOOGLE_API_KEY: z.string().optional(),
  GROQ_API_KEY: z.string().optional(),
  HELICONE_API_KEY: z.string().optional(),
  HF_API_TOKEN: z.string().optional(),
  HF_TOKEN: z.string().optional(),
  HUGGING_FACE_HUB_TOKEN: z.string().optional(),
  LANGFUSE_HOST: z.string().optional(),
  LANGFUSE_PUBLIC_KEY: z.string().optional(),
  LANGFUSE_SECRET_KEY: z.string().optional(),
  LLAMA_BASE_URL: z.string().optional(),
  LOCALAI_BASE_URL: z.string().optional(),
  MISTRAL_API_BASE_URL: z.string().optional(),
  MISTRAL_API_HOST: z.string().optional(),
  MISTRAL_API_KEY: z.string().optional(),
  OLLAMA_API_KEY: z.string().optional(),
  OLLAMA_BASE_URL: z.string().optional(),
  OPENAI_API_BASE_URL: z.string().optional(),
  OPENAI_API_HOST: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_BASE_URL: z.string().optional(),
  OPENAI_ORGANIZATION: z.string().optional(),
  PALM_API_HOST: z.string().optional(),
  PALM_API_KEY: z.string().optional(),
  PORTKEY_API_KEY: z.string().optional(),
  PROMPTFOO_CA_CERT_PATH: z.string().optional(),
  PROMPTFOO_INSECURE_SSL: z.string().optional(),
  REPLICATE_API_KEY: z.string().optional(),
  REPLICATE_API_TOKEN: z.string().optional(),
  VERTEX_API_HOST: z.string().optional(),
  VERTEX_API_KEY: z.string().optional(),
  VERTEX_API_VERSION: z.string().optional(),
  VERTEX_PROJECT_ID: z.string().optional(),
  VERTEX_PUBLISHER: z.string().optional(),
  VERTEX_REGION: z.string().optional(),
  VOYAGE_API_BASE_URL: z.string().optional(),
  VOYAGE_API_KEY: z.string().optional(),
  WATSONX_AI_APIKEY: z.string().optional(),
  WATSONX_AI_AUTH_TYPE: z.string().optional(),
  WATSONX_AI_BEARER_TOKEN: z.string().optional(),
  WATSONX_AI_PROJECT_ID: z.string().optional(),
  AZURE_CONTENT_SAFETY_ENDPOINT: z.string().optional(),
  AZURE_CONTENT_SAFETY_API_KEY: z.string().optional(),
  AZURE_CONTENT_SAFETY_API_VERSION: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_DEFAULT_REGION: z.string().optional(),
  AWS_SAGEMAKER_MAX_TOKENS: z.string().optional(),
  AWS_SAGEMAKER_TEMPERATURE: z.string().optional(),
  AWS_SAGEMAKER_TOP_P: z.string().optional(),
  AWS_SAGEMAKER_MAX_RETRIES: z.string().optional(),
});

export type EnvOverrides = z.infer<typeof ProviderEnvOverridesSchema>;
