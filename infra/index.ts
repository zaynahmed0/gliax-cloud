import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as random from "@pulumi/random";

// Load config
const cfg = new pulumi.Config();
const environment = cfg.require("env"); // "dev" / "staging"
const supabaseUrl = cfg.requireSecret("supabaseUrl");
const supabaseKey = cfg.requireSecret("supabaseKey");
const modalToken = cfg.requireSecret("modalToken");

// 1) S3 bucket for artifacts
const bucket = new aws.s3.Bucket(`artifacts-${environment}`, {
  versioning: { enabled: true },
  lifecycleRules: [{ enabled: true, expiration: { days: 90 } }],
});

// 2) Supabase project (via Terraform or API wrapper)
//    Here we just export the keys you'd provision separately
export const sbUrl = supabaseUrl;
export const sbKey = supabaseKey;

// 3) Modal tokens
export const modalApiToken = modalToken;

// 4) Provision Vercel project via API
const vercel = new aws.lambda.Function("noop", {
  // placeholder; real Vercel provisioning requires their CLI or API
}); 