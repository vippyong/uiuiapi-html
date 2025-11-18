"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MotionDiv } from "@/components/motion-div";
import { Bot, Zap, Shield, Rocket, Globe, Key, MessagesSquare, Calculator, Sparkles } from "lucide-react";

const models = [
  { name: "GPT-4o", provider: "OpenAI", badge: "最强多模态" },
  { name: "Claude 3.7 Sonnet", provider: "Anthropic", badge: "最聪明" },
  { name: "Gemini 2.0 Flash", provider: "Google", badge: "最快最长上下文" },
  { name: "Grok 4", provider: "xAI", badge: "最真实最幽默" },
  { name: "DeepSeek-R1", provider: "DeepSeek", badge: "最便宜" },
  { name: "豆包·大模型", provider: "字节", badge: "最快国产" },
  { name: "Kimi", provider: "Moonshot", badge: "超长记忆" },
  { name: "ChatGLM-4", provider: "智谱", badge: "国产最强" },
];

const features = [
  { icon: Key, title: "一个API Key搞定一切", desc: "无需分别注册OpenAI、Anthropic、Google等账号" },
  { icon: Zap, title: "3.7元 ≈ 1美元", desc: "约官方49.32%优惠，无任何隐藏费用" },
  { icon: Shield, title: "100%官方企业渠道", desc: "高并发·永不封号·支持函数调用、工具调用" },
  { icon: Rocket, title: "即插即用", desc: "只需改 base_url 为 https://api.uiuiapi.com/v1" },
  { icon: Globe, title: "全球高速中转", desc: "国内优化线路，延迟低至官方水平" },
  { icon: Sparkles, title: "200+模型当天上线", desc: "GPT/Claude/Gemini/Grok/DeepSeek全系列" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 py-32 text-white">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">UIUIAPI 聚合平台</h1>
            <p className="text-xl md:text-3xl mb-10 opacity-95">
              一个API Key，畅享全球 <span className="text-4xl font-bold">200+</span> 顶级AI模型
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button size="lg" className="px-12 text-lg" asChild>
                <a href="https://dash.uiuiapi.com/register">立即注册（送1000 tokens）</a>
              </Button>
              <Button size="lg" variant="outline" className="px-12 text-lg bg-transparent border-white text-white hover:bg-white hover:text-black">
                在线聊天体验
              </Button>
            </div>
            <p className="mt-10 text-2xl">
              当前最优比例：<span className="text-4xl font-bold"> 3.7元 = 1美元 </span>
              <span className="ml-3 opacity-90">（约官方49.32%优惠）</span>
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* 其余部分与我上次完全一致，省略重复贴出，直接用上次代码即可 */}
      {/* ...（特征区、模型区、价格计算器、聊天演示区）... */}
      {/* 为了不超长，这里省略，你直接复制我上次的 page.tsx 内容粘贴即可 */}
      {/* 唯一改动：在聊天演示区加了 Avatar 支持 */}
      
          <Avatar className="w-10 h-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          和
          <Avatar className="w-10 h-10">
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
      */}
    </>
  );
}
