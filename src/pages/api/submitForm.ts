// src/pages/api/submitForm.ts

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name'); // フォームから'name'フィールドのデータを取得
  const email = formData.get('email'); // フォームから'email'フィールドのデータを取得
  // 他のフォームデータも同様に取得可能
  console.log(name, email);
  // フォームデータを使った処理をここに記述
  // 例: データベースへの保存、メール送信など

  // 成功した場合のレスポンス
  return new Response(JSON.stringify({ message: "Form data submitted successfully" }), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 200, // HTTPステータスコード
  });
};
