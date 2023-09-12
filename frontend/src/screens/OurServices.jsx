import { Button } from "react-bootstrap";
import "./OurServices.css";
import {
  FaQuestionCircle,
  FaShieldVirus,
  FaRocket,
  FaCode,
  FaCodeBranch,
  FaFireExtinguisher,
  FaDollarSign,
} from "react-icons/fa";

const OurServices = () => {
  return (
    <div id="services" className="section services-section text-center">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <div className="section-intro">
          <p>
            Welcome to <strong>Jason & Company</strong> AWS Consulting Services,
            where innovation meets reliability. As a seasoned AWS tech
            consultant, I bring a wealth of experience and expertise to help you
            navigate the complex world of Amazon Web Services. Whether you're
            looking to optimize your infrastructure, enhance security,
            streamline development pipelines, or need 24/7 support, I offer
            tailored solutions designed to elevate your AWS journey.
          </p>
          <p className="pt-1">
            With a focus on efficiency, cost-effectiveness, and best practices,
            I am dedicated to empowering your business to thrive in the cloud.
            Explore my comprehensive range of consulting services below and
            let's embark on a journey to unlock the true potential of AWS for
            your organization.
          </p>
        </div>

        <div className="services-list row">
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-wheel_barrow">
                <FaRocket />
              </span>
              <h3 className="item-title">AWS Infrastructure Optimization</h3>
              <div className="item-desc">
                <p>
                  Maximize the efficiency and cost-effectiveness of your AWS
                  infrastructure. We'll fine-tune your resources, automate
                  scaling, and implement cost-saving strategies to ensure
                  optimal performance without overspending.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-paint_brush">
                <FaCodeBranch />
              </span>
              <h3 className="item-title">
                Continuous Integration &amp; Continuous Deployment (CI/CD)
                Pipeline Setup
              </h3>
              <div className="item-desc">
                <p>
                  Streamline your development process with a robust CI/CD
                  pipeline. We'll design and implement automated workflows that
                  enable rapid and reliable software delivery, ensuring faster
                  time-to-market and higher software quality.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-paint_roller">
                <FaShieldVirus />
              </span>
              <h3 className="item-title">AWS Security &amp; Compliance</h3>
              <div className="item-desc">
                <p>
                  Safeguard your AWS environment against threats and ensure
                  compliance with industry regulations. We'll assess and enhance
                  your security posture, set up monitoring and alerting, and
                  provide ongoing security management.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-digger">
                <FaCode />
              </span>
              <h3 className="item-title">
                Infrastructure as Code (IaC) Implementation
              </h3>
              <div className="item-desc">
                <p>
                  Harness the power of IaC to manage your infrastructure
                  programmatically. We'll help you adopt tools like Terraform or
                  AWS CloudFormation to provision and manage resources
                  efficiently, reducing manual errors and enabling version
                  control.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-ladder">
                <FaDollarSign />
              </span>
              <h3 className="item-title">
                AWS Cost Optimization &amp; Budget Management
              </h3>
              <div className="item-desc">
                <p>
                  Control your AWS spending and avoid unexpected bills. We'll
                  create a customized cost optimization strategy, set budgets,
                  and implement tools for monitoring and tracking expenses to
                  keep your cloud costs in check.
                </p>
              </div>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-12">
            <div className="item-inner">
              <span className="custom-icon icon-ruler_pencil">
                <FaFireExtinguisher />
              </span>
              <h3 className="item-title">
                24/7 AWS Support and Incident Response
              </h3>
              <div className="item-desc">
                <p>
                  Ensure the reliability and availability of your AWS
                  applications with around-the-clock support. We offer proactive
                  monitoring, rapid incident response, and expert guidance to
                  minimize downtime and resolve issues promptly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-area">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Button variant="success" href="#contact">
                Get a FREE quote
              </Button>
            </li>
            <li className="list-inline-item">
              <Button variant="success" href="#projects">
                View our projects
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
