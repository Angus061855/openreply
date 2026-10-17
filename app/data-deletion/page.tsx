import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

export const metadata: Metadata = { title: "資料刪除方式 - Zhaoruoqing Reply", description: "適用於 Zhaoruoqing Reply 自用部署所保存的資料。" };

export default function Page() {
  return (
    <LegalShell title="資料刪除方式" description="適用於 Zhaoruoqing Reply 自用部署所保存的資料。" updatedAt="2026-10-17">
      <section><h2 className="text-xl font-bold text-white">留言者如何申請</h2><p className="mt-3">請寄信至 angus061855@gmail.com，主旨填「Zhaoruoqing Reply 資料刪除」，提供 Instagram 使用者名稱、相關貼文網址與欲刪除的資料類型。不要提供帳號密碼或驗證碼。</p></section>
      <section><h2 className="text-xl font-bold text-white">處理流程</h2><p className="mt-3">管理者會確認資料歸屬，再刪除本服務保存的相關留言、私訊事件及傳送紀錄，並回覆處理結果。必要時會請你從該 Instagram 帳號聯絡以確認身分。</p></section>
      <section><h2 className="text-xl font-bold text-white">刪除範圍</h2><p className="mt-3">此流程處理本工具保存的資料；Instagram 上的原始留言與收件匣訊息，需依 Instagram 自身功能管理。本工具無法代替 Meta 刪除其保存的所有資料。</p></section>
      <section><h2 className="text-xl font-bold text-white">管理者停止連接</h2><p className="mt-3">在後台「設定」中斷 Instagram 連接，可移除該連接的存取權杖並停止使用該連接發送私訊。</p></section>
    </LegalShell>
  );
}
