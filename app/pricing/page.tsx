import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, HelpCircle, TrendingUp, Users, Target } from "lucide-react"

const pricingPlans = [
  {
    name: "スタートアップ",
    description: "小規模チーム向けの基本プラン",
    price: "月額15万円",
    originalPrice: null,
    popular: false,
    features: [
      { name: "営業戦略設計", included: true },
      { name: "ターゲットリスト作成（50社）", included: true },
      { name: "メール営業代行", included: true },
      { name: "月次レポート", included: true },
      { name: "テレアポ代行", included: false },
      { name: "商談同席", included: false },
      { name: "技術資料作成", included: false },
      { name: "専任担当者", included: false },
    ],
    cta: "プランを選択",
    ideal: "従業員5-10名の企業",
    results: "月間2-4件の新規案件獲得目標",
  },
  {
    name: "スタンダード",
    description: "成長企業向けの人気プラン",
    price: "月額25万円",
    originalPrice: null,
    popular: true,
    features: [
      { name: "営業戦略設計", included: true },
      { name: "ターゲットリスト作成（150社）", included: true },
      { name: "メール営業代行", included: true },
      { name: "月次レポート", included: true },
      { name: "テレアポ代行", included: true },
      { name: "商談同席", included: true },
      { name: "技術資料作成", included: false },
      { name: "専任担当者", included: false },
    ],
    cta: "プランを選択",
    ideal: "従業員10-25名の企業",
    results: "月間4-8件の新規案件獲得目標",
  },
  {
    name: "プレミアム",
    description: "本格的な営業強化プラン",
    price: "月額40万円",
    originalPrice: null,
    popular: false,
    features: [
      { name: "営業戦略設計", included: true },
      { name: "ターゲットリスト作成（300社）", included: true },
      { name: "メール営業代行", included: true },
      { name: "月次レポート", included: true },
      { name: "テレアポ代行", included: true },
      { name: "商談同席", included: true },
      { name: "技術資料作成", included: true },
      { name: "専任担当者", included: true },
    ],
    cta: "プランを選択",
    ideal: "従業員25名以上の企業",
    results: "月間8-15件の新規案件獲得目標",
  },
]

const additionalServices = [
  {
    name: "成果報酬プラン",
    description: "受注時のみ費用が発生する完全成果報酬制",
    price: "受注額の15-20%",
    features: [
      "初期費用・月額費用なし",
      "受注時のみ成果報酬をお支払い",
      "リスクを最小限に抑えた営業代行",
      "成果にコミットした営業活動",
    ],
    icon: Target,
  },
  {
    name: "ハイブリッドプラン",
    description: "月額固定費 + 成果報酬の組み合わせ",
    price: "月額10万円 + 受注額の10%",
    features: [
      "低い月額固定費で継続的サポート",
      "成果に応じた追加報酬",
      "バランスの取れた料金体系",
      "長期的なパートナーシップ",
    ],
    icon: TrendingUp,
  },
]

const faqs = [
  {
    question: "契約期間はどのくらいですか？",
    answer:
      "基本的には6ヶ月からの契約となります。営業活動は継続性が重要なため、短期間では十分な成果を出すことが困難です。ただし、成果報酬プランの場合は3ヶ月からご利用いただけます。",
  },
  {
    question: "成果が出なかった場合はどうなりますか？",
    answer:
      "月額プランの場合、3ヶ月間で商談設定が0件の場合は、4ヶ月目の料金を免除いたします。また、成果報酬プランでは受注がなければ費用は一切発生しません。",
  },
  {
    question: "途中でプラン変更は可能ですか？",
    answer:
      "はい、可能です。事業の成長や営業活動の状況に応じて、月単位でプランの変更が可能です。プラン変更は前月末までにご連絡ください。",
  },
  {
    question: "どのような業界に対応していますか？",
    answer:
      "主に受託開発企業（Web開発、システム開発、アプリ開発など）を対象としています。IT業界の特性を理解した専門的な営業代行を提供いたします。",
  },
  {
    question: "営業活動の報告はどのように行われますか？",
    answer:
      "月次で詳細なレポートを提供いたします。アプローチ数、レスポンス率、商談設定数、受注状況などを数値で報告し、次月の戦略も合わせてご提案いたします。",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">料金プラン</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                貴社の規模と目標に合わせて最適なプランをお選びください。
                <br />
                すべてのプランで初回相談は無料です。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Star className="h-4 w-4 mr-2" />
                  初回相談無料
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  専門チーム対応
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  成果保証あり
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">月額プラン</h2>
              <p className="text-xl text-muted-foreground">継続的な営業支援で安定した案件獲得を実現</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular ? "border-accent shadow-lg scale-105" : "border-border"
                  } transition-all duration-300 hover:shadow-lg`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-white px-4 py-1">人気プラン</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">{plan.name}</CardTitle>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.ideal}</div>
                      <div className="text-sm text-accent font-medium">{plan.results}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">
                その他の料金プラン
              </h2>
              <p className="text-xl text-muted-foreground">リスクを抑えたい企業様向けの特別プラン</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">{service.name}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="text-2xl font-bold text-accent mb-4">{service.price}</div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full bg-transparent">
                      詳細を相談する
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">よくあるご質問</h2>
              <p className="text-xl text-muted-foreground">料金プランに関するよくあるご質問にお答えします</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <HelpCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-space-grotesk">
              最適なプランを一緒に見つけましょう
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              貴社の現状と目標をお聞かせください。
              <br />
              最適な料金プランとサービス内容をご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8">
                無料相談を申し込む
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                料金表をダウンロード
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
