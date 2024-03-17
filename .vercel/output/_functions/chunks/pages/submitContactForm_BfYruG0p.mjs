const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    console.log({ name, email, subject, message });
    return new Response(JSON.stringify({ message: "Form submitted successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Form submission failed" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export { POST };
