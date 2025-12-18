"use client"

import { useState } from "react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { ReviewForm } from "@/components/review-form"
import { ReviewResults } from "@/components/review-results"
import { ReviewHistory } from "@/components/review-history"
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react"

export default function Home() {
  const [currentAnalysis, setCurrentAnalysis] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [reviews, setReviews] = useState<any[]>([])

  const handleSubmitReview = async (reviewText: string) => {
    setError(null)
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const mockResult = {
        status: "success",
        data: {
          id: Date.now(),
          review_text: reviewText,
          sentiment: Math.random() > 0.5 ? "POSITIVE" : "NEGATIVE",
          confidence: Math.random() * 0.3 + 0.7,
          key_points: ["Kualitas produk sangat baik", "Pengiriman cepat dan aman", "Harga sesuai dengan kualitas"],
          created_at: new Date().toISOString(),
        },
      }

      setCurrentAnalysis(mockResult)
      setReviews((prev) => [mockResult.data, ...prev])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background transition-theme">
      {/* Header with THD Logo */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-theme">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* THD Logo */}
              <div className="relative h-12 w-12 gold-glow rounded-lg overflow-hidden bg-black p-1">
                <Image
                  src="/images/logo-thd.png"
                  alt="THD Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <span className="text-gold-gradient">THD</span>
                  <span>Review Analyzer</span>
                  <Sparkles className="h-5 w-5 text-primary" />
                </h1>
                <p className="text-sm text-muted-foreground">
                  Analisis sentimen berbasis AI & ekstraksi insight otomatis
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20 transition-theme">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium">
              <Zap className="h-4 w-4 text-primary" />
              <span>Powered by AI Technology</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Analisis Ulasan Produk dengan <span className="text-gold-gradient">Kecerdasan Buatan</span>
            </h2>

            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Dapatkan insight mendalam dari ulasan pelanggan menggunakan teknologi Natural Language Processing terkini
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border/50 transition-theme hover:border-primary/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Analisis Real-time</h3>
                <p className="text-sm text-muted-foreground text-center">Hasil instan dengan akurasi tinggi</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border/50 transition-theme hover:border-primary/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Akurat & Terpercaya</h3>
                <p className="text-sm text-muted-foreground text-center">Model AI terlatih dengan dataset besar</p>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border/50 transition-theme hover:border-primary/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Ekstraksi Insight</h3>
                <p className="text-sm text-muted-foreground text-center">Poin kunci otomatis dari setiap ulasan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Review Form */}
          <ReviewForm onSubmit={handleSubmitReview} isLoading={isLoading} error={error} />

          {/* Results */}
          {currentAnalysis && <ReviewResults analysis={currentAnalysis} />}

          {/* History */}
          {reviews.length > 0 && <ReviewHistory reviews={reviews} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16 transition-theme">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Image src="/images/logo-thd.png" alt="THD" width={24} height={24} className="object-contain" />
              <span className="font-semibold text-gold-gradient">THD Review Analyzer</span>
            </div>

            <p className="text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-foreground">Hugging Face</span> &{" "}
              <span className="font-semibold text-foreground">Google Gemini AI</span>
            </p>

            <p className="text-sm text-muted-foreground">Dibangun dengan Next.js, React, Pyramid & PostgreSQL</p>

            <div className="pt-4 border-t border-border/40 mt-4">
              <p className="text-sm font-medium">
                Dibuat oleh <span className="text-primary">Tengku Hafid Diraputra</span>
              </p>
              <p className="text-xs text-muted-foreground">NIM: 123140043</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
