"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Send, AlertCircle } from "lucide-react"

interface ReviewFormProps {
  onSubmit: (review: string) => void
  isLoading: boolean
  error: string | null
}

export function ReviewForm({ onSubmit, isLoading, error }: ReviewFormProps) {
  const [reviewText, setReviewText] = useState("")
  const maxLength = 1000
  const remaining = maxLength - reviewText.length

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reviewText.trim() && reviewText.length <= maxLength) {
      onSubmit(reviewText.trim())
    }
  }

  return (
    <Card className="border-border/50 shadow-lg transition-theme">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-gold-gradient">📝</span>
          <span>Masukkan Ulasan Produk</span>
        </CardTitle>
        <CardDescription>Tulis ulasan produk dalam bahasa Indonesia atau Inggris untuk dianalisis</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Contoh: Produk ini sangat bagus! Kualitas material premium dan pengiriman cepat. Sangat puas dengan pembelian ini..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="min-h-[150px] resize-none border-border/50 focus:border-primary transition-all"
              disabled={isLoading}
              maxLength={maxLength}
            />
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Minimal 10 karakter</span>
              <span className={remaining < 100 ? "text-destructive" : "text-muted-foreground"}>
                {remaining} karakter tersisa
              </span>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            disabled={isLoading || reviewText.trim().length < 10}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Menganalisis...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Analisis Sekarang
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
