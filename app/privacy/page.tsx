import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

export const metadata: Metadata = { title: "隱私權說明 - Zhaoruoqing Reply", description: "本服務為 @zhaoruoqing4 自用的 Instagram 留言私訊工具，使用 OpenReply 開源軟體。" };

export default function Page() {
  return (
    <LegalShell title="隱私權說明" description="本服務為 @zhaoruoqing4 自用的 Instagram 留言私訊工具，使用 OpenReply 開源軟體。" updatedAt="2026-10-17">
      <section><h2 className="text-xl font-bold text-white">處理哪些資料</h2><p className="mt-3">管理者登入 Email、已連接的 Instagram 帳號識別碼與加密存取權杖、留言者帳號識別資訊、留言內容、訊息事件、關鍵字設定及傳送紀錄。</p></section>
      <section><h2 className="text-xl font-bold text-white">資料用途</h2><p className="mt-3">透過 Meta 官方 API 接收留言、比對關鍵字，向符合條件的留言者傳送所要求的 LINE 連結；另用於避免重複傳送、管理回覆及排查錯誤。不要求留言者提供 Instagram 密碼。</p></section>
      <section><h2 className="text-xl font-bold text-white">服務提供者</h2><p className="mt-3">Meta 提供 Instagram API；Railway 提供網站、PostgreSQL 資料庫與 Redis 佇列代管；Resend 僅用於管理者登入信。資料依服務運作所需傳送至上述提供者，可能於境外處理。本部署不使用 AI 分析留言，也未提供付費會員服務。</p></section>
      <section><h2 className="text-xl font-bold text-white">資料管理與聯絡</h2><p className="mt-3">管理者可中斷 Instagram 連接。留言者若要查詢或刪除由本工具保存的個人資料，請寄信至 angus061855@gmail.com，附上 Instagram 使用者名稱及相關貼文網址。請勿提供密碼或驗證碼。詳細流程請見資料刪除頁。</p></section>
    </LegalShell>
  );
}
