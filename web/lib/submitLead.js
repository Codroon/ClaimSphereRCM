// Shared lead-form submission. All marketing forms on the site (hero, about
// pain-point form, contact) post to the same submit-form.com endpoint so leads
// land in one inbox. `formName` is what distinguishes them there.
//
// NOTE: endpoint is the client's submit-form.com form ID. If the provider ever
// changes, this is the only place that needs updating.
const ENDPOINT = 'https://submit-form.com/l1C0vmLXg';

export async function submitLead(formName, data) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ _formName: formName, ...data }),
  });

  if (!response.ok) throw new Error('Submission failed');
  return response;
}

// Consistent SMS/marketing consent copy — required for the client's SMS
// compliance, so every form that collects a phone number must render it.
export const SMS_CONSENT_NOTE =
  'By providing your phone number and submitting this form, you agree to receive SMS messages from ClaimSphere RCM LLC. Message and data rates may apply. Message frequency varies. Reply STOP to opt out, HELP for help.';
