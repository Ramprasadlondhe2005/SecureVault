import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Users, 
  FileText, 
  Key, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  Flame,
  Terminal,
  RefreshCw,
  HardDrive,
  Eye,
  EyeOff,
  Sparkles,
  Server,
  Laptop,
  Check,
  X,
  LockKeyhole,
  Sliders,
  Clock,
  KeyRound,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';

// FEATURES SPECIFICATION
const features = [
  {
    icon: Lock,
    title: 'Zero-Knowledge Architecture',
    description: 'All files, credentials, and notes are encrypted locally in your browser with AES-256-GCM before transmission.',
    tag: 'Military Grade',
    highlight: true,
  },
  {
    icon: Key,
    title: 'Encrypted Password Vault',
    description: 'Manage, organize, and auto-generate complex credentials with zero-knowledge master-key protection.',
    tag: 'Vault Core',
  },
  {
    icon: FileText,
    title: 'Encrypted Notes Vault',
    description: 'Create and store confidential notes protected by client-side cryptographic safeguards.',
    tag: 'Client Encrypted',
  },
  {
    icon: Flame,
    title: 'Self-Destruct Share Links',
    description: 'Share encrypted files with automatic countdown timers, view limits, and master passcode locks.',
    tag: 'Stealth Sharing',
  },
  {
    icon: Smartphone,
    title: 'Session & Threat Guard',
    description: 'Monitor active logins in real time with IP signatures, device fingerprints, and single-click remote session kill.',
    tag: 'Live Defense',
  },
  {
    icon: Shield,
    title: 'Two-Factor Authentication (2FA)',
    description: 'Fortify your account with time-based OTP authenticator app integration.',
    tag: 'Identity Guard',
  },
];

const securityFeatures = [
  'Zero-Knowledge Architecture',
  'AES-256-GCM Client Encryption',
  'Local Key Derivation (PBKDF2)',
  'Self-Destruct Expiry Links',
  'Two-Factor Authentication (2FA)',
  'Audit Trail & Session Revocation',
];

export default function Landing() {
  // Interactive Live Cipher Terminal State
  const [demoText, setDemoText] = useState('Confidential Tax Report 2026.pdf');
  const [cipherText, setCipherText] = useState('0x7f9a2b84c19d3e51a620f48e... [AES-256-GCM]');
  const [isEncrypting, setIsEncrypting] = useState(false);

  // Interactive Architecture Pipeline Active Step
  const [pipelineStep, setPipelineStep] = useState<number>(1);

  // Interactive Feature Playground Tab
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'files' | 'passwords' | 'notes' | 'sharing'>('files');

  // Interactive Password Generator Simulator
  const [simulatedLength, setSimulatedLength] = useState<number>(16);
  const [generatedPass, setGeneratedPass] = useState<string>('xK9#mQ2$pL7!vW4z');

  // Interactive Decipher Note Toggle
  const [isNoteDecrypted, setIsNoteDecrypted] = useState<boolean>(false);

  // Simulate Local Client Encryption
  const handleSimulateEncryption = () => {
    setIsEncrypting(true);
    setTimeout(() => {
      const hex = '0123456789abcdef';
      let result = '0x';
      for (let i = 0; i < 40; i++) {
        result += hex[Math.floor(Math.random() * hex.length)];
      }
      setCipherText(result + '... [AES-256-GCM Ciphertext]');
      setIsEncrypting(false);
    }, 350);
  };

  // Simulate Password Generation
  const handleGeneratePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=';
    let res = '';
    for (let i = 0; i < simulatedLength; i++) {
      res += chars[Math.floor(Math.random() * chars.length)];
    }
    setGeneratedPass(res);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 font-sans">
      
      {/* Background Cyber Mesh & Ambient Light Orbs */}
      <div className="fixed inset-0 bg-[radial-[#10b98115]_1px,transparent_1px] [background-size:24px_24px] pointer-events-none opacity-40 z-0" />
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 transition-all">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-accent flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse-ring">
              <Lock className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Secure<span className="gradient-text">Vault</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#pipeline" className="hover:text-primary transition-colors">Architecture</a>
            <a href="#playground" className="hover:text-primary transition-colors">Interactive Demo</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#comparison" className="hover:text-primary transition-colors">Why Zero-Knowledge</a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="hover:text-primary transition-colors">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-gradient shadow-md hover:shadow-primary/20 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------------------
          1. HERO SECTION WITH 3D CYBER VAULT GRAPHIC
      ------------------------------------------------------------- */}
      <section className="pt-36 pb-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 shadow-sm animate-float">
                <ShieldCheck className="h-4 w-4 text-emerald-500 animate-pulse" />
                <span className="text-xs md:text-sm font-semibold text-primary">
                  Military-Grade AES-256-GCM Zero-Knowledge Security
                </span>
                <Badge variant="outline" className="border-emerald-500/40 text-emerald-600 bg-emerald-500/10 text-[10px] ml-1">
                  256-BIT
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Your Digital Fortress. <br />
                <span className="gradient-text">Encrypted & Unbreachable.</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Zero-knowledge encrypted file storage, password manager, and private notes. 
                Your files are locked on your device before touching the cloud — 
                <strong className="text-foreground font-semibold"> zero plaintext, zero server access.</strong>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/signup">
                  <Button size="lg" className="btn-gradient px-8 py-6 text-base md:text-lg rounded-xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Launch Secure Vault
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>

                <Link to="/login">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base md:text-lg rounded-xl border-primary/30 hover:bg-primary/5 transition-all">
                    Access Vault
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs md:text-sm text-muted-foreground">
                {securityFeatures.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-card/60 border border-border/50 px-3 py-1.5 rounded-full shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Interactive 3D Cyber Graphic Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Outer Glowing Cyber Rings */}
              <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] relative flex items-center justify-center">
                
                {/* Rotating Orbit Ring 1 */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-orbit" />
                
                {/* Rotating Orbit Ring 2 */}
                <div className="absolute inset-4 rounded-full border border-emerald-500/20 animate-orbit-reverse" />
                
                {/* Ambient Center Glow */}
                <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl" />

                {/* Floating Orbiting Badges */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/90 border border-primary/30 px-3 py-1 rounded-full text-xs font-mono text-primary shadow-lg backdrop-blur-md flex items-center gap-1.5 animate-float">
                  <Lock className="h-3 w-3" /> AES-256-GCM
                </div>

                <div className="absolute bottom-4 right-0 bg-card/90 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono text-emerald-500 shadow-lg backdrop-blur-md flex items-center gap-1.5 animate-float-delayed">
                  <Cpu className="h-3 w-3" /> PBKDF2 Key
                </div>

                <div className="absolute top-1/3 left-0 bg-card/90 border border-border px-3 py-1 rounded-full text-xs font-mono text-muted-foreground shadow-lg backdrop-blur-md flex items-center gap-1.5 animate-float">
                  <Shield className="h-3 w-3 text-primary" /> Zero-Knowledge
                </div>

                {/* Center Core Vault Shield Graphic */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-slate-950 border border-primary/40 shadow-2xl p-6 flex flex-col items-center justify-center space-y-4 relative overflow-hidden group hover:border-primary/80 transition-colors">
                  
                  {/* Scanner line beam */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <LockKeyhole className="h-10 w-10 text-primary-foreground" />
                  </div>

                  <div className="text-center space-y-1">
                    <div className="font-mono text-xs text-emerald-400 font-bold flex items-center justify-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      VAULT PROTECTED
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">Client Key Derived</div>
                  </div>

                  <div className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-[10px] font-mono text-slate-300">
                    STATUS: 100% ENCRYPTED
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. INTERACTIVE ZERO-KNOWLEDGE PIPELINE VISUALIZER
      ------------------------------------------------------------- */}
      <section id="pipeline" className="py-20 px-6 bg-card/40 border-y border-border/40 relative">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">
              HOW ZERO-KNOWLEDGE WORKS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Encryption Happens <span className="gradient-text">Before</span> Storage
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Click on each phase to explore how SecureVault guarantees absolute data privacy.
            </p>
          </div>

          {/* 3 Step Interactive Pipeline Diagram */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div 
              onClick={() => setPipelineStep(1)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                pipelineStep === 1 
                  ? 'bg-primary/10 border-primary shadow-xl shadow-primary/10 -translate-y-1' 
                  : 'glass-card border-border/40 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="font-mono text-xs">Step 01</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">1. Client Encryption</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your master key derives an AES-256 key locally. Your files & passwords are encrypted inside your browser window.
              </p>
              {pipelineStep === 1 && (
                <div className="mt-4 pt-3 border-t border-primary/20 text-xs font-mono text-primary flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Active Selection • Client Derived Key
                </div>
              )}
            </div>

            {/* Step 2 */}
            <div 
              onClick={() => setPipelineStep(2)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                pipelineStep === 2 
                  ? 'bg-primary/10 border-primary shadow-xl shadow-primary/10 -translate-y-1' 
                  : 'glass-card border-border/40 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="font-mono text-xs">Step 02</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">2. Unreadable Transport</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Only the scrambled ciphertext payload travels across the network. If intercepted, it is impossible to decipher.
              </p>
              {pipelineStep === 2 && (
                <div className="mt-4 pt-3 border-t border-primary/20 text-xs font-mono text-primary flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Active Selection • Ciphertext Payload
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div 
              onClick={() => setPipelineStep(3)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                pipelineStep === 3 
                  ? 'bg-primary/10 border-primary shadow-xl shadow-primary/10 -translate-y-1' 
                  : 'glass-card border-border/40 hover:border-primary/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="font-mono text-xs">Step 03</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">3. Zero-Knowledge Server</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our backend stores ciphertext blobs. Because we hold zero master keys, even a server breach reveals nothing.
              </p>
              {pipelineStep === 3 && (
                <div className="mt-4 pt-3 border-t border-primary/20 text-xs font-mono text-primary flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Active Selection • Zero Server Access
                </div>
              )}
            </div>

          </div>

          {/* Interactive Pipeline Live Console Output */}
          <div className="mt-8 bg-slate-950 text-slate-100 p-6 rounded-2xl border border-emerald-500/30 font-mono text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <Terminal className="h-4 w-4" /> PIPELINE ARCHITECTURE INSPECTOR — PHASE {pipelineStep}/3
              </span>
              <span className="text-slate-500 text-[10px]">AES-256-GCM / PBKDF2</span>
            </div>

            {pipelineStep === 1 && (
              <div className="space-y-2 animate-in">
                <p className="text-emerald-300">&gt; User Master Password: &quot;MySecretPassphrase123!&quot;</p>
                <p className="text-slate-400">&gt; Deriving cryptographic key locally using PBKDF2 (100,000 iterations)...</p>
                <p className="text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800">
                  Key Derived: <span className="text-emerald-400">c4a79b02e... (32-byte AES-256 Key)</span> [Stored strictly in RAM]
                </p>
              </div>
            )}

            {pipelineStep === 2 && (
              <div className="space-y-2 animate-in">
                <p className="text-emerald-300">&gt; Network Transport Payload:</p>
                <p className="text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800 break-all">
                  POST /api/files/upload HTTP/1.1 <br />
                  Body: <span className="text-emerald-400">&quot;iv&quot;: &quot;7f8a91b...&quot;, &quot;data&quot;: &quot;0x9f83a21bc98...&quot;</span>
                </p>
                <p className="text-slate-400">&gt; Status: Protected by TLS 1.3 + End-to-End Client Encryption</p>
              </div>
            )}

            {pipelineStep === 3 && (
              <div className="space-y-2 animate-in">
                <p className="text-emerald-300">&gt; Backend Storage State:</p>
                <p className="text-slate-200 bg-slate-900 p-2.5 rounded border border-slate-800">
                  Database Record: <span className="text-emerald-400">{`{ id: 104, encryptedData: "BLOB(0x9f83a21...)", keyHash: null }`}</span>
                </p>
                <p className="text-slate-400">&gt; Verification: Server holds ZERO decryption keys. Data is mathematically unreadable without user password.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          3. INTERACTIVE FEATURE PLAYGROUND SHOWCASE
      ------------------------------------------------------------- */}
      <section id="playground" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <Badge className="bg-primary/10 text-primary border border-primary/20 px-3 py-1">
              INTERACTIVE DEMO PLAYGROUND
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Explore <span className="gradient-text">SecureVault</span> in Action
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Test core vault capabilities interactively right from your browser.
            </p>
          </div>

          {/* Playground Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-muted p-1.5 rounded-2xl flex flex-wrap items-center justify-center gap-2 border border-border/60">
                
                <button
                  onClick={() => setActivePlaygroundTab('files')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activePlaygroundTab === 'files' 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Lock className="h-4 w-4" /> File Encryption
                </button>

                <button
                  onClick={() => setActivePlaygroundTab('passwords')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activePlaygroundTab === 'passwords' 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Key className="h-4 w-4" /> Password Vault
                </button>

                <button
                  onClick={() => setActivePlaygroundTab('notes')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activePlaygroundTab === 'notes' 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <FileText className="h-4 w-4" /> Encrypted Notes
                </button>

                <button
                  onClick={() => setActivePlaygroundTab('sharing')}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activePlaygroundTab === 'sharing' 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Flame className="h-4 w-4" /> Self-Destruct
                </button>

              </div>
            </div>

            {/* Tab 1: File Encryption Simulator */}
            {activePlaygroundTab === 'files' && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/30 shadow-2xl space-y-6 animate-in">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Client-Side File Encryption Simulator</h3>
                      <p className="text-xs text-muted-foreground">Type a filename to simulate client-side AES-256 key generation</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/40 text-emerald-500 font-mono text-xs">
                    AES-256-GCM
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-muted-foreground">Test File Name:</label>
                    <input 
                      type="text" 
                      value={demoText}
                      onChange={(e) => setDemoText(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/60 border border-border focus:border-primary focus:outline-none font-mono text-sm"
                    />
                    <Button 
                      onClick={handleSimulateEncryption} 
                      disabled={isEncrypting}
                      className="w-full btn-gradient py-2.5 font-semibold flex items-center justify-center gap-2"
                    >
                      <RefreshCw className={`h-4 w-4 ${isEncrypting ? 'animate-spin' : ''}`} />
                      {isEncrypting ? 'Scrambling File Data...' : 'Simulate Local Encryption'}
                    </Button>
                  </div>

                  <div className="bg-slate-950 text-slate-100 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs">
                    <div className="text-slate-500">// Local Encrypted Blob:</div>
                    <div className="text-emerald-400 break-all bg-slate-900 p-3 rounded border border-slate-800">
                      {cipherText}
                    </div>
                    <div className="text-[10px] text-slate-400 pt-1 flex justify-between">
                      <span>Status: Protected</span>
                      <span>Zero Plaintext Transmitted</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Password Generator Simulator */}
            {activePlaygroundTab === 'passwords' && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/30 shadow-2xl space-y-6 animate-in">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Zero-Knowledge Password Generator</h3>
                      <p className="text-xs text-muted-foreground">Generate high-entropy passwords with custom length controls</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/40 text-emerald-500 font-mono text-xs">
                    Entropy: 128-bit
                  </Badge>
                </div>

                <div className="space-y-4 max-w-xl mx-auto">
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 text-emerald-400 font-mono text-center text-xl tracking-wider font-bold shadow-inner">
                    {generatedPass}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>Password Length: {simulatedLength} characters</span>
                      <span className="text-emerald-500">Very Strong</span>
                    </div>
                    <input 
                      type="range" 
                      min="8" 
                      max="32" 
                      value={simulatedLength} 
                      onChange={(e) => setSimulatedLength(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                  </div>

                  <Button 
                    onClick={handleGeneratePassword} 
                    className="w-full btn-gradient py-2.5 font-semibold flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Generate New Password
                  </Button>
                </div>
              </div>
            )}

            {/* Tab 3: Encrypted Notes Preview */}
            {activePlaygroundTab === 'notes' && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/30 shadow-2xl space-y-6 animate-in">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Encrypted Notes Viewer</h3>
                      <p className="text-xs text-muted-foreground">Test how encrypted notes toggle between ciphertext and plain text</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsNoteDecrypted(!isNoteDecrypted)}
                    className="flex items-center gap-1.5 border-primary/30 text-primary"
                  >
                    {isNoteDecrypted ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {isNoteDecrypted ? 'Lock Note' : 'Decrypt Note'}
                  </Button>
                </div>

                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm space-y-3">
                  <div className="text-xs text-slate-500 flex justify-between border-b border-slate-800 pb-2">
                    <span>Note Title: Bank Recovery Seed Phrase</span>
                    <span className="text-emerald-400">{isNoteDecrypted ? 'DECRYPTED' : 'LOCKED'}</span>
                  </div>

                  {isNoteDecrypted ? (
                    <div className="text-emerald-300 leading-relaxed bg-slate-900 p-4 rounded border border-emerald-500/30 animate-in">
                      apple river mountain 9482 galaxy echo alpha standard secure 2026
                    </div>
                  ) : (
                    <div className="text-slate-500 leading-relaxed bg-slate-900 p-4 rounded border border-slate-800 break-all select-none">
                      0x94f81a7b29e01d4c82f910a382c... [AES-256 Scrambled Ciphertext]
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 4: Self-Destruct Sharing Simulator */}
            {activePlaygroundTab === 'sharing' && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/30 shadow-2xl space-y-6 animate-in">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Flame className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">Self-Destruct Share Link Safeguard</h3>
                      <p className="text-xs text-muted-foreground">Files automatically purge after expiry or view limits are reached</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/40 text-emerald-500 font-mono text-xs">
                    Auto-Wipe Active
                  </Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="font-bold text-sm">Time Countdown</div>
                    <p className="text-xs text-muted-foreground">Link expires in 24 Hours</p>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                    <Eye className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="font-bold text-sm">Max View Limit</div>
                    <p className="text-xs text-muted-foreground">Allowed: 1 Single View</p>
                  </div>

                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                    <KeyRound className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="font-bold text-sm">Passcode Lock</div>
                    <p className="text-xs text-muted-foreground">Required Passcode Active</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          4. WHY ZERO-KNOWLEDGE MATTERS (COMPARISON TABLE)
      ------------------------------------------------------------- */}
      <section id="comparison" className="py-20 px-6 bg-card/40 border-y border-border/40 relative">
        <div className="container mx-auto max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">
              SECURITY COMPARISON
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Standard Cloud vs <span className="gradient-text">SecureVault Zero-Knowledge</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              See why traditional storage providers fail to protect your private data.
            </p>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-950 text-slate-100 border-b border-slate-800">
                    <th className="p-4 md:p-5 font-bold">Security Feature</th>
                    <th className="p-4 md:p-5 font-bold text-slate-400">Traditional Cloud Storage</th>
                    <th className="p-4 md:p-5 font-bold text-emerald-400 bg-emerald-500/10 border-l border-emerald-500/20">SecureVault Zero-Knowledge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="p-4 font-semibold">Where Encryption Key Lives</td>
                    <td className="p-4 text-muted-foreground flex items-center gap-1.5">
                      <X className="h-4 w-4 text-destructive" /> Server holds master key
                    </td>
                    <td className="p-4 font-semibold text-emerald-500 bg-emerald-500/5 border-l border-emerald-500/20 flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-500" /> Client browser only
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">Can Employees/Admins Read Files?</td>
                    <td className="p-4 text-muted-foreground flex items-center gap-1.5">
                      <X className="h-4 w-4 text-destructive" /> Yes, readable plaintext
                    </td>
                    <td className="p-4 font-semibold text-emerald-500 bg-emerald-500/5 border-l border-emerald-500/20 flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-500" /> Impossible (0 Plaintext)
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">Data Breach Vulnerability</td>
                    <td className="p-4 text-muted-foreground flex items-center gap-1.5">
                      <X className="h-4 w-4 text-destructive" /> Server leak reveals all files
                    </td>
                    <td className="p-4 font-semibold text-emerald-500 bg-emerald-500/5 border-l border-emerald-500/20 flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-500" /> Unreadable scrambled blobs
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">Self-Destruct Share Links</td>
                    <td className="p-4 text-muted-foreground flex items-center gap-1.5">
                      <X className="h-4 w-4 text-destructive" /> Not supported
                    </td>
                    <td className="p-4 font-semibold text-emerald-500 bg-emerald-500/5 border-l border-emerald-500/20 flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-500" /> Fully Built-in
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          5. FEATURE GRID
      ------------------------------------------------------------- */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprehensive Security Suite
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Engineered with zero-trust architecture for absolute data confidentiality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl glass-card hover-lift border transition-all duration-300 relative overflow-hidden ${
                  item.highlight ? 'border-primary/40 bg-gradient-to-b from-primary/10 to-transparent' : 'border-border/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary text-[11px]">
                    {item.tag}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
          6. METRICS TRUST BANNER
      ------------------------------------------------------------- */}
      <section className="py-16 px-6 bg-slate-950 text-slate-100 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-2 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono">256-bit</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">AES-GCM Cipher</div>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono">0-Knowledge</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Server Plaintext</div>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono">100,000</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">PBKDF2 Iterations</div>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Client Key Derived</div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. CONVERSION CTA BANNER
      ------------------------------------------------------------- */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-primary/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Take Full Control of Your Privacy
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                Create your zero-knowledge account in seconds and protect your credentials and files with true digital defense.
              </p>

              <Link to="/signup">
                <Button size="lg" className="btn-gradient px-10 py-6 text-base md:text-lg rounded-xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                  Create Your Secure Vault
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          8. FOOTER
      ------------------------------------------------------------- */}
      <footer className="py-8 px-6 border-t border-border/40 text-xs text-muted-foreground">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <span className="font-bold text-foreground">SecureVault</span>
            <span>— Military-Grade Encrypted Platform</span>
          </div>

          <p>© 2026 SecureVault. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
