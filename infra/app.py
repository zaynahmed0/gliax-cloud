from cdktf import App, TerraformStack
from constructs import Construct
from imports.aws import S3Bucket

class InfraStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        S3Bucket(self, "artifacts",
            bucket=f"gliax-artifacts-{self.node.try_get_context('env')}",
            versioning={"enabled": True}
        )

app = App()
InfraStack(app, "gliax-infra",)
app.synth() 