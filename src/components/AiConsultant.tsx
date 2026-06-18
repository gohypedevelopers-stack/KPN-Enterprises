import React, { useState, useRef, useEffect } from "react";
import { MessageSquareCode, Send, HelpCircle, Loader2, Sparkles, User, RefreshCw, AlertCircle } from "lucide-react";
import { FeedbackMessage } from "../types";

export default function AiConsultant() {
  const [messages, setMessages] = useState<FeedbackMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Greetings! I am the KPN Enterprises AI Flooring Advisor. I hold the complete catalog of KPN's high-performance industrial coatings, technical specifications, coving layouts, and application standards.\n\nTell me: **What sector is your facility in, or what mechanical stress factors (traffic, chemical spills, temperature extremes) are you solving for?**",
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const starterQuestions = [
    { label: "Forklift Traffic", q: "Recommend a flooring solution for an engineering warehouse handling heavy forklift wheel loads and abrasion." },
    { label: "Sterile Cleanrooms", q: "What premium floor coatings, coving methods, and joint-sealants fit FDA sterile pharmaceutical zones?" },
    { label: "Static ESD Protection", q: "How does KPN install antistatic conductive ESD systems, and what industries need them?" },
    { label: "Food Acid & Heat Resistance", q: "What should we install in a dairy plant or commercial kitchen that undergoes high-temp thermal washdowns and organic acids?" }
  ];

  const handleSend = async (customText?: string) => {
    const textToSend = customText || userInput;
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsg: FeedbackMessage = {
      id: "msg-" + Math.random().toString(36).substr(2, 9),
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setUserInput("");
    setIsLoading(true);

    try {
      // Map feedback trace to lightweight server payloads
      const chatHistory = messages.map((m) => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: chatHistory
        })
      });

      if (!res.ok) {
        throw new Error("Unable to consult the AI model. Please verify server connection.");
      }

      const data = await res.json();
      
      const serverMsg: FeedbackMessage = {
        id: "msg-" + Math.random().toString(36).substr(2, 9),
        role: "model",
        text: data.text || "I apologize, but I could not formulate a technical recommendation at this moment. Let's trace your criteria again.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, serverMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "model",
        text: "Reset accomplished! I am ready to evaluate another project specification. Please detail your square footage, current subfloor condition, temperature ranges, or chemical loads.",
        timestamp: new Date()
      }
    ]);
    setErrorStatus(null);
  };

  return (
    <section id="ai-advisor" className="py-24 bg-editorial-bg text-editorial-ink relative border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Badge */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-beige border border-editorial-border text-editorial-accent rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3 text-editorial-accent" />
            Gemini Core Assistant
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-editorial-ink font-light">
            Consult the <span className="not-italic font-semibold">Flooring AI Advisor</span>
          </h2>
          <p className="text-xs sm:text-sm text-editorial-dark-gray max-w-2xl mx-auto leading-relaxed font-semibold">
            Detail your subfloor load properties, square footage scale, chemical exposure risks, and our AI calculates optimized physical bounds dynamically.
          </p>
        </div>

        {/* AI chat widget panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick instructions / sample inputs (cols: 4) */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="bg-white border border-editorial-border rounded-xl p-5 space-y-4 shadow-sm flex-1">
              <span className="flex items-center gap-2 text-editorial-ink font-bold text-xs tracking-widest uppercase">
                <HelpCircle className="w-4 h-4 text-editorial-accent" />
                Suggested Inquiries
              </span>
              <p className="text-[11px] text-[#8C8C88] leading-relaxed font-semibold">
                Click any prompt below to trigger instant analysis. It auto-injects physical stress parameters from KPN guidelines.
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {starterQuestions.map((sq, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sq.q)}
                    disabled={isLoading}
                    className="w-full text-left p-3 rounded bg-editorial-cream hover:bg-editorial-beige border border-editorial-border hover:border-editorial-accent text-[11px] text-editorial-dark-gray hover:text-editorial-ink font-bold uppercase tracking-wide transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {sq.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-[10px] text-editorial-muted font-bold uppercase tracking-wider">
                <span>Reset thread?</span>
                <button
                  onClick={handleResetChat}
                  className="flex items-center gap-1 text-editorial-ink hover:text-editorial-accent transition duration-150 font-bold uppercase tracking-widest cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  Clear chat
                </button>
              </div>
            </div>

            {/* Representative direct line info */}
            <div className="bg-editorial-beige border border-editorial-border rounded-xl p-5 space-y-2">
              <h4 className="text-xs font-bold text-editorial-ink uppercase tracking-widest">Custom Site Estimates</h4>
              <p className="text-xs text-editorial-dark-gray leading-relaxed font-medium">
                Need on-site testing? Our specialists inspect concrete moisture, aggregate grading level, and cracking rates directly.
              </p>
              <div className="text-xs lg:text-sm font-bold text-editorial-ink font-mono uppercase tracking-wider pt-1">
                Active Desk: <span className="text-editorial-accent font-extrabold">+91 9810349899</span>
              </div>
            </div>
          </div>

          {/* Core conversation display (cols: 8) */}
          <div className="lg:col-span-8 flex flex-col bg-white border border-editorial-border rounded-xl overflow-hidden shadow-sm min-h-[500px]">
            {/* Header bar of conversation */}
            <div className="bg-editorial-cream border-b border-editorial-border px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-editorial-ink flex items-center justify-center border border-editorial-border">
                  <MessageSquareCode className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-editorial-ink uppercase tracking-wider">KPN Technical Advisor</div>
                  <div className="text-[10px] text-editorial-accent font-extrabold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent animate-pulse" />
                    SYSTEM ACTIVE
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-editorial-muted font-bold pl-1 uppercase tracking-wider hidden sm:block">Model: gemini-3.5-flash</span>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[360px] min-h-[300px] bg-editorial-cream/20">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-3 max-w-[85%] ${
                    m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  {/* Sender Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      m.role === "user"
                        ? "bg-editorial-beige border-editorial-border text-editorial-ink"
                        : "bg-editorial-ink border-editorial-ink text-white"
                    }`}
                  >
                    {m.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-editorial-accent" />}
                  </div>

                  {/* Speech Bubble */}
                  <div className="space-y-1">
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-medium shadow-sm ${
                        m.role === "user"
                          ? "bg-editorial-ink text-white rounded-tr-none"
                          : "bg-white border border-editorial-border text-editorial-ink rounded-tl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                    <div
                      className={`text-[9px] text-[#8C8C88] font-bold font-mono uppercase tracking-wider mt-0.5 ${
                        m.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loader indicator while stream generates */}
              {isLoading && (
                <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                  <div className="w-8 h-8 rounded-full bg-editorial-cream border border-editorial-border flex items-center justify-center text-editorial-accent">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-white border border-editorial-border p-4 rounded-2xl text-xs text-editorial-muted font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>Evaluating mechanical stress metrics...</span>
                  </div>
                </div>
              )}

              {/* Error state */}
              {errorStatus && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 max-w-md mx-auto font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <div className="flex-1">
                    <strong className="uppercase">Evaluation Failed:</strong> {errorStatus}
                    <button
                      onClick={() => handleSend()}
                      className="block text-editorial-accent underline mt-1 font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Retry evaluation call
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 bg-editorial-cream border-t border-editorial-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask advisor: e.g., Recommend a layout mapping heavy-load limits..."
                  disabled={isLoading}
                  className="flex-1 bg-white border border-editorial-border focus:border-editorial-accent rounded-xl px-4 py-3 text-xs sm:text-sm text-editorial-ink focus:outline-none placeholder-editorial-muted font-semibold"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !userInput.trim()}
                  className="bg-editorial-ink hover:bg-editorial-accent disabled:bg-editorial-border text-white disabled:text-editorial-muted px-4.5 py-3 rounded-xl transition-all duration-150 flex items-center justify-center shrink-0 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
