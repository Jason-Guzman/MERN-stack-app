terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.16.0"
    }
  }
}
provider "aws" {
  region = var.region
  default_tags {
    tags = {
      Environment = "Production"
      Service     = "MERN-APP"
    }
  }
}


