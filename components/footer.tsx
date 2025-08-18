import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-space-grotesk text-2xl font-bold">DevMatch</div>
            <p className="text-background/80 leading-relaxed">
              企業の営業課題を解決し、売上向上を実現する専門的な営業代行サービス
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold text-lg">サービス</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  テレアポ代行
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  メール営業
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  営業戦略立案
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  営業チーム構築
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold text-lg">会社情報</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  利用規約
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-space-grotesk font-semibold text-lg">お問い合わせ</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@devmatch.co.jp</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>東京都渋谷区</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 DevMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
