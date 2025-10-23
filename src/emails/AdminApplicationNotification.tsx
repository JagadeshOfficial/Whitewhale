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

interface AdminApplicationNotificationProps {
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantCoverLetter?: string;
}

export default function AdminApplicationNotification({
  jobTitle,
  applicantName,
  applicantEmail,
  applicantPhone,
  applicantCoverLetter,
}: AdminApplicationNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New Job Application: {jobTitle}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">New Application for {jobTitle}</Heading>
              <Text>You have received a new application for the position of {jobTitle}.</Text>
              <Hr />
              <Text><strong>Applicant Details:</strong></Text>
              <ul>
                <li><strong>Name:</strong> {applicantName}</li>
                <li><strong>Email:</strong> {applicantEmail}</li>
                <li><strong>Phone:</strong> {applicantPhone}</li>
              </ul>
              {applicantCoverLetter && (
                <>
                  <Hr />
                  <Text><strong>Cover Letter:</strong></Text>
                  <Text>{applicantCoverLetter}</Text>
                </>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
