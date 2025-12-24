import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Uses Gemini to polish a raw user inquiry into a professional business email format.
 */
export const polishInquiry = async (rawText: string): Promise<string> => {
  if (!rawText || rawText.length < 5) return rawText;
  if (!ai) return rawText; // APIキーがない場合はそのまま返す

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `あなたは優秀な秘書です。
      以下のユーザーからの問い合わせ内容（メモ書きや箇条書き、口語など）を、
      高級ブランド企業への問い合わせにふさわしい、丁寧で洗練された日本語のビジネスメール文章にリライトしてください。
      
      件名や[お名前]などのプレースホルダーは不要です。本文のみを出力してください。
      元の意味は変えず、言葉遣いを「尊敬語」「謙譲語」「丁寧語」を適切に使ったハイエンドなトーンに変換してください。
      
      入力内容: "${rawText}"`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text?.trim() || rawText;
  } catch (error) {
    console.error("Gemini polish failed:", error);
    return rawText; // Fallback to original
  }
};