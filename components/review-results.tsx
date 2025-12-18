"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, MinusCircle, TrendingUp, Lightbulb } from "lucide-react"

interface ReviewResultsProps {
  analysis: any
}

export function ReviewResults({ analysis }: ReviewResultsProps) {
  if (!analysis?.data) return null

  const { sentiment, confidence, key_points, review_text } = analysis.data

  const sentimentConfig = {
    POSITIVE: {
      icon: CheckCircle2,
      label: "Positif",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    NEGATIVE: {
      icon: XCircle,
      label: "Negatif",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    NEUTRAL: {
      icon: MinusCircle,
      label: "Netral",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
  }

  const config = sentimentConfig[sentiment as keyof typeof sentimentConfig] || sentimentConfig.NEUTRAL
  const Icon = config.icon
  const confidencePercent = Math.round(confidence * 100)

  return (
    <div className="space-y-6 animate-in">
      {/* Sentiment Card */}
      <Card className={`border-2 ${config.borderColor} shadow-lg transition-theme`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Hasil Analisis Sentimen</span>
          </CardTitle>
          <CardDescription>Analisis berbasis AI menggunakan DistilBERT</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sentiment Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`${config.bgColor} p-3 rounded-full`}>
                <Icon className={`h-8 w-8 ${config.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sentimen</p>
                <p className={`text-2xl font-bold ${config.color}`}>{config.label}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Confidence Score</p>
              <p className="text-2xl font-bold text-primary">{confidencePercent}%</p>
            </div>
          </div>

          {/* Confidence Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tingkat Kepercayaan</span>
              <span className="font-medium">{confidencePercent}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${confidencePercent}%` }}
              />
            </div>
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Ulasan yang Dianalisis:</p>
            <div className="p-4 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-sm italic">&ldquo;{review_text}&rdquo;</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points Card */}
      {key_points && key_points.length > 0 && (
        <Card className="border-border/50 shadow-lg transition-theme">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Poin Kunci</span>
            </CardTitle>
            <CardDescription>Insight otomatis dari Google Gemini AI</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {key_points.map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
