"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { History, ChevronLeft, ChevronRight, CheckCircle2, XCircle, MinusCircle } from "lucide-react"

interface ReviewHistoryProps {
  reviews: any[]
}

export function ReviewHistory({ reviews }: ReviewHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(reviews.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentReviews = reviews.slice(startIndex, endIndex)

  const sentimentConfig = {
    POSITIVE: {
      icon: CheckCircle2,
      label: "Positif",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/50",
    },
    NEGATIVE: {
      icon: XCircle,
      label: "Negatif",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/50",
    },
    NEUTRAL: {
      icon: MinusCircle,
      label: "Netral",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/50",
    },
  }

  if (reviews.length === 0) return null

  return (
    <Card className="border-border/50 shadow-lg transition-theme">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <span>Riwayat Analisis</span>
        </CardTitle>
        <CardDescription>Total {reviews.length} ulasan telah dianalisis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentReviews.map((review) => {
            const config = sentimentConfig[review.sentiment as keyof typeof sentimentConfig] || sentimentConfig.NEUTRAL
            const Icon = config.icon
            const confidencePercent = Math.round(review.confidence * 100)
            const date = new Date(review.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })

            return (
              <div
                key={review.id}
                className="p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-all space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm line-clamp-2">&ldquo;{review.review_text}&rdquo;</p>
                    <p className="text-xs text-muted-foreground">{date}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${config.bgColor} ${config.color} border ${config.borderColor}`}>
                      <Icon className="h-3 w-3 mr-1" />
                      {config.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{confidencePercent}% akurat</span>
                  </div>
                </div>

                {review.key_points && review.key_points.length > 0 && (
                  <div className="pt-2 border-t border-border/30">
                    <p className="text-xs text-muted-foreground mb-2">Poin Kunci:</p>
                    <ul className="space-y-1">
                      {review.key_points.slice(0, 2).map((point: string, idx: number) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span className="line-clamp-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Halaman {currentPage} dari {totalPages}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="border-border/50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="border-border/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
