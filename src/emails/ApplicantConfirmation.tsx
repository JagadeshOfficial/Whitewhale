import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ApplicantConfirmationProps {
  jobTitle: string;
  applicantName: string;
}

export default function ApplicantConfirmation({
  jobTitle,
  applicantName,
}: ApplicantConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Application Received for {jobTitle}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Thank You for Your Application</Heading>
              <Text>Dear {applicantName},</Text>
              <Text>
                This email is to confirm that we have successfully received your application for the
                <strong>{jobTitle}</strong> position at Innovate Solutions.
              </Text>
              <Text>
                Our hiring team is currently reviewing all applications and we will get back to you as soon as possible if your qualifications match our requirements.
              </Text>
              <Text>Thank you for your interest in joining our team.</Text>
              <Hr />
              <Text>Sincerely,<br />The Innovate Solutions Team</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
