import { mailtrapClient, sender } from "./mailtrap.config.js";

import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email Verification successfully", response);
  } catch (error) {
    console.log(`Error sending verfication email:${error}`);
    throw new Error(`Error sending verfication email:${error}`);
  }
};

//mailtrapTemplate

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "cd75763b-ba9b-4a84-9e16-d01b271ac89d",
      template_variables: {
        company_info_name: "ADV-AUTH",
        name: name,
      },
    });

    console.log(" welcome Email successfully", response);
  } catch (error) {
    console.log(`Error sending welcome email: ${error}`);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
    console.log("ResetLink Email  successfully", response);
  } catch (error) {
    console.log(`Error in forgotPassword Email`, error);
    resetURL.status(400).json({ success: false, message: error.message });
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset Success",
    });
    console.log("Password Reset Email successfully", response);
  } catch (error) {
    console.log(`Error in Reset Password Email`, error);
    resetURL.status(400).json({ success: false, message: error.message });
  }
};
