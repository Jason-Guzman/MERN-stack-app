output "allocated_ip" {
  value = aws_eip.MERN-eip.public_ip
}
