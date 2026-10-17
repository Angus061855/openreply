import type { Metadata } from "next";
import LegalShell from "@/components/legal-shell";

export const metadata: Metadata = { title: "使用說明與服務條款 - Zhaoruoqing Reply", description: "Zhaoruoqing Reply 是 @zhaoruoqing4 的自用留言回覆工具，不對外販售帳號。" };

export default function Page() {
  return (
    <LegalShell title="使用說明與服務條款" description="Zhaoruoqing Reply 是 @zhaoruoqing4 的自用留言回覆工具，不對外販售帳號。" updatedAt="2026-10-17">
      <section><h2 className="text-xl font-bold text-white">互動方式</h2><p className="mt-3">在指定貼文留言指定關鍵字後，服務依已設定規則透過 Instagram 傳送對應連結。取得 LINE 連結不代表已購買、預約或同意任何其他服務。</p></section>
      <section><h2 className="text-xl font-bold text-white">使用範圍</h2><p className="mt-3">本服務僅管理經帳號持有人授權的 Instagram 帳號，遵守 Meta 的權限、傳送次數與訊息時間限制。不以留言者身分發布內容。</p></section>
      <section><h2 className="text-xl font-bold text-white">服務可用性</h2><p className="mt-3">服務依賴 Meta、Railway 及 Resend。平台限制、主機試用額度、維護或連線問題可能造成延遲或停止，不保證每則留言都能即時收到私訊。</p></section>
      <section><h2 className="text-xl font-bold text-white">聯絡與開源軟體</h2><p className="mt-3">服務聯絡信箱為 angus061855@gmail.com。底層 OpenReply 軟體採 MIT 授權，原始專案為 github.com/diwenne/openreply。</p></section>
    </LegalShell>
  );
}
