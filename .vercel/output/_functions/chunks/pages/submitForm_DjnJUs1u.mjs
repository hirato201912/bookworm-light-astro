const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Success!"
        // 処理結果や追加データを含めることができる
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `Server error: ${error}`
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export { POST };
