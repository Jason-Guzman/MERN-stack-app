#1. Create VPC
resource "aws_vpc" "MERN-vpc" {
  cidr_block = "10.0.0.0/16"
}

#2. Create Internet Gateway
resource "aws_internet_gateway" "MERN-igw" {
  vpc_id = aws_vpc.MERN-vpc.id
}

#3. Create Custom Route Table
resource "aws_route_table" "mern-route-table" {
  vpc_id = aws_vpc.MERN-vpc.id

  # Define a default route for IPv4 traffic
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.MERN-igw.id
  }

  # Define a default route for IPv6 traffic
  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.MERN-igw.id
  }
}

#4. Create a Subnet
resource "aws_subnet" "MERN-public-subnet-1" {
  vpc_id            = aws_vpc.MERN-vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

#5. Associate Subnet with Route table
resource "aws_route_table_association" "mern-association" {
  subnet_id      = aws_subnet.MERN-public-subnet-1.id
  route_table_id = aws_route_table.mern-route-table.id
}

#6. Create Security Groups
resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow Web inbound traffic"
  vpc_id      = aws_vpc.MERN-vpc.id

  ingress {
    description      = "HTTPS"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

#7. Create a network interface with an IP in the subnet that was created in step 4
resource "aws_network_interface" "web-server-nic" {
  subnet_id       = aws_subnet.MERN-public-subnet-1.id
  private_ips     = ["10.0.1.50"]
  security_groups = [aws_security_group.allow_web.id]
}

#8. Assign an elastic IP to the network interface created in step 7.
resource "aws_eip" "MERN-eip" {
  domain                    = "vpc"
  network_interface         = aws_network_interface.web-server-nic.id
  associate_with_private_ip = "10.0.1.50"
  depends_on                = [aws_internet_gateway.MERN-igw]
}

#9. Create Ubuntu server and install/enable apache2
resource "aws_instance" "MERN_ec2" {
  ami               = "ami-01c647eace872fc02"
  instance_type     = "t2.micro"
  key_name          = "N.Virginia- KP"
  availability_zone = "us-east-1a"
  user_data         = file("userdata/userdata.tpl")

  network_interface {
    device_index         = 0
    network_interface_id = aws_network_interface.web-server-nic.id

  }
}

