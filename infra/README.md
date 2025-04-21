# Infrastructure

This directory contains infrastructure-as-code (IaC) configurations, deployment scripts, and cloud resource definitions.

## Contents

- Cloud infrastructure configurations
- Deployment pipelines
- Environment configurations
- Resource provisioning scripts

## Prerequisites

- Python 3.10 or later
- AWS CLI configured with appropriate credentials
- Terraform CDK CLI (`npm install -g cdktf-cli`)

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Initialize the CDK project:
   ```bash
   cdktf init --template="python"
   ```

3. Set the environment context:
   ```bash
   cdktf context -c env=dev  # or prod, staging, etc.
   ```

## Deployment

1. Synthesize the Terraform configuration:
   ```bash
   cdktf synth
   ```

2. Deploy the infrastructure:
   ```bash
   cdktf deploy
   ```

## Infrastructure Components

- S3 Bucket for artifacts storage with versioning enabled
- Environment-specific naming (e.g., gliax-artifacts-dev, gliax-artifacts-prod)

## Security

- AWS credentials should be configured via environment variables or AWS CLI configuration
- Consider using AWS SSO or IAM roles for production deployments 