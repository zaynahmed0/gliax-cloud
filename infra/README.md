# Infrastructure

This directory contains infrastructure-as-code (IaC) configurations using Pulumi for the GliaX Cloud platform.

## Contents

- Cloud infrastructure configurations
- Deployment pipelines
- Environment configurations
- Resource provisioning scripts

## Prerequisites

- Node.js 16 or later
- Pulumi CLI (`brew install pulumi` on macOS)
- AWS CLI configured with appropriate credentials

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize Pulumi stack for your environment:
   ```bash
   pulumi stack init dev  # or staging, prod
   ```

3. Configure environment-specific settings:
   ```bash
   pulumi config set env dev
   pulumi config set --secret supabaseUrl https://xyz.supabase.co
   pulumi config set --secret supabaseKey YOUR_SUPABASE_KEY
   pulumi config set --secret modalToken YOUR_MODAL_TOKEN
   ```

## Deployment

1. Preview changes:
   ```bash
   pulumi preview
   ```

2. Deploy infrastructure:
   ```bash
   pulumi up --yes
   ```

## Infrastructure Components

- S3 Bucket for artifacts storage with versioning and lifecycle rules
- Supabase project configuration
- Modal API token management
- Vercel project provisioning (placeholder)

## Security

- Sensitive configuration values are stored as secrets in Pulumi
- AWS credentials should be configured via environment variables or AWS CLI
- Consider using AWS SSO or IAM roles for production deployments 