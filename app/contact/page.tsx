import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Building2, Calendar } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "お電話でのお問い合わせ",
    content: "03-XXXX-XXXX",
    description: "平日 9:00-18:00",
    action: "今すぐ電話",
  },
  {
    icon: Mail,
    title: "メールでのお問い合わせ",
    content: "contact@devmatch.co.jp",
    description: "24時間受付（返信は営業時間内）",
    action: "メールを送る",
  },
  {
    icon: Calendar,
    title: "オンライン相談予約",
    content: "Zoom/Google Meet",
    description: "30分の無料相談",
    action: "予約する",
  },
]

const inquiryTypes = [
  {
    type: "無料相談",
    description: "サービス内容や料金について詳しく知りたい",
    icon: MessageSquare,
    popular: true,
  },
  {
    type: "資料請求",
    description: "詳細な資料をダウンロードしたい",
    icon: Building2,
    popular: false,
  },
  {
    type: "見積もり依頼",
    description: "具体的な見積もりを取得したい",
    icon: Users,
    popular: false,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">お問い合わせ</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                営業課題の解決について、まずはお気軽にご相談ください。
                <br />
                初回相談は無料で、貴社に最適なソリューションをご提案いたします。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  初回相談無料
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  24時間以内に返信
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  専門スタッフ対応
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">お問い合わせ方法</h2>
              <p className="text-xl text-muted-foreground">
                お客様のご都合に合わせて、お好みの方法でお問い合わせください
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <method.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-space-grotesk">{method.title}</h3>
                    <div className="text-2xl font-semibold text-foreground mb-2">{method.content}</div>
                    <p className="text-muted-foreground mb-6">{method.description}</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">お問い合わせ内容</h2>
              <p className="text-xl text-muted-foreground">どのようなご相談でも承ります</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {inquiryTypes.map((inquiry, index) => (
                <Card key={index} className={`p-6 ${inquiry.popular ? "border-accent shadow-lg" : ""}`}>
                  <CardContent className="p-0">
                    {inquiry.popular && <Badge className="bg-accent text-white mb-4">人気</Badge>}
                    <div className="flex items-center mb-4">
                      <inquiry.icon className="h-6 w-6 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-primary font-space-grotesk">{inquiry.type}</h3>
                    </div>
                    <p className="text-muted-foreground">{inquiry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">
                お問い合わせフォーム
              </h2>
              <p className="text-xl text-muted-foreground">
                以下のフォームにご記入いただければ、24時間以内にご返信いたします
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">会社名 *</Label>
                      <Input id="company" placeholder="株式会社○○" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input id="name" placeholder="山田 太郎" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input id="email" type="email" placeholder="example@company.co.jp" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input id="phone" type="tel" placeholder="03-1234-5678" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="position">役職</Label>
                      <Input id="position" placeholder="代表取締役、営業部長など" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">従業員数</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5名</SelectItem>
                          <SelectItem value="6-10">6-10名</SelectItem>
                          <SelectItem value="11-25">11-25名</SelectItem>
                          <SelectItem value="26-50">26-50名</SelectItem>
                          <SelectItem value="51-100">51-100名</SelectItem>
                          <SelectItem value="100+">100名以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">お問い合わせ種別 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">無料相談</SelectItem>
                        <SelectItem value="materials">資料請求</SelectItem>
                        <SelectItem value="quote">見積もり依頼</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">想定予算（月額）</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10">10万円未満</SelectItem>
                        <SelectItem value="10-20">10-20万円</SelectItem>
                        <SelectItem value="20-30">20-30万円</SelectItem>
                        <SelectItem value="30-50">30-50万円</SelectItem>
                        <SelectItem value="over-50">50万円以上</SelectItem>
                        <SelectItem value="success-fee">成果報酬のみ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges">現在の営業課題</Label>
                    <Textarea
                      id="challenges"
                      placeholder="例：新規案件の獲得が安定しない、営業活動に時間を取られてエンジニアが開発に集中できない、など"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">その他ご質問・ご要望</Label>
                    <Textarea
                      id="message"
                      placeholder="ご質問やご要望がございましたら、お気軽にお書きください"
                      rows={4}
                    />
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 px-12">
                      送信する
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      送信いただいた内容は、24時間以内にご返信いたします。
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">会社情報</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">株式会社DevMatch</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">本社所在地</div>
                      <div className="text-muted-foreground">
                        東京都渋谷区
                        <br />
                        （詳細住所は契約時にお伝えいたします）
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">電話番号</div>
                      <div className="text-muted-foreground">03-XXXX-XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">メールアドレス</div>
                      <div className="text-muted-foreground">contact@devmatch.co.jp</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">営業時間</div>
                      <div className="text-muted-foreground">
                        平日 9:00-18:00
                        <br />
                        （土日祝日は休業）
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">お問い合わせ前に</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">初回相談は無料です。お気軽にお問い合わせください。</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">ご相談内容に応じて、最適なプランをご提案いたします。</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">秘密保持契約（NDA）の締結も可能です。</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">オンライン相談も承っております。</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
