import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">DevMatchについて</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                受託開発企業のエンジニアが開発に集中できる環境を作り、
                <br />
                技術力で勝負できる未来を実現します
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-2xl font-bold text-primary font-space-grotesk">ミッション</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    受託開発企業のエンジニアが営業活動に時間を取られることなく、
                    本来の技術力を最大限に発揮できる環境を提供します。
                    私たちが営業を代行することで、クライアントは開発に専念し、
                    より高品質なソフトウェアを生み出すことができます。
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Heart className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-2xl font-bold text-primary font-space-grotesk">ビジョン</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    技術力のある受託開発企業が営業力不足で苦戦する現状を変え、
                    優秀なエンジニアが適正な評価と報酬を得られる業界を実現します。
                    営業代行を通じて、日本のIT業界全体の技術レベル向上に貢献します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">私たちの価値観</h2>
              <p className="text-xl text-muted-foreground">DevMatchが大切にしている3つの価値観</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <Users className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">パートナーシップ</h3>
                  <p className="text-muted-foreground">
                    単なる営業代行ではなく、クライアントの成長を共に目指すパートナーとして、 長期的な関係を築きます。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <Target className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">結果重視</h3>
                  <p className="text-muted-foreground">
                    活動量ではなく成果にコミットし、クライアントの売上向上と 事業成長に直結する結果を追求します。
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="p-0">
                  <Award className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">専門性</h3>
                  <p className="text-muted-foreground">
                    IT業界と受託開発の特性を深く理解し、技術的な価値を 適切に伝える専門的な営業力を提供します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">会社情報</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="grid gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="font-semibold text-primary w-32 mb-2 sm:mb-0">会社名</div>
                      <div className="text-muted-foreground">株式会社DevMatch</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="font-semibold text-primary w-32 mb-2 sm:mb-0">設立</div>
                      <div className="text-muted-foreground">2024年</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="font-semibold text-primary w-32 mb-2 sm:mb-0">事業内容</div>
                      <div className="text-muted-foreground">受託開発企業向け営業代行サービス</div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <div className="font-semibold text-primary w-32 mb-2 sm:mb-0">所在地</div>
                      <div className="text-muted-foreground">
                        東京都渋谷区
                        <br />
                        （詳細住所は契約時にお伝えいたします）
                      </div>
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
