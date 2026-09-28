import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, CheckCircle2, Lock, ShieldAlert, KeyRound } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Security() {
  const { securityAlerts, markAlertRead, setupDuressPassword, isDuressMode } = useAuth();

  const [duressPass, setDuressPass] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSetupDuress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!duressPass || duressPass.trim().length < 4) {
      Swal.fire('Invalid Password', 'Duress password must be at least 4 characters long.', 'warning');
      return;
    }

    setIsSaving(true);
    const res = await setupDuressPassword(duressPass.trim());
    setIsSaving(false);

    if (res.success) {
      setDuressPass('');
      Swal.fire({
        title: 'Panic Mode Configured!',
        text: 'Duress Password has been saved. If forced to log in under threat, enter this password to activate Decoy Empty Vault mode.',
        icon: 'success',
        confirmButtonColor: '#10B981',
      });
    } else {
      Swal.fire('Setup Failed', res.message || 'Could not configure Panic Password', 'error');
    }
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'high': return 'bg-warning/10 text-warning border-warning/20';
      case 'medium': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="space-y-6 animate-in">
      <div>
        <h1 className="text-3xl font-bold">Security Center</h1>
        <p className="text-muted-foreground">Manage your threat detection, Panic Mode, and security logs.</p>
      </div>

      {isDuressMode && (
        <Card className="border-destructive bg-destructive/10">
          <CardContent className="p-4 flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-destructive flex-shrink-0" />
            <div>
              <p className="font-bold text-destructive">Decoy / Panic Mode Active</p>
              <p className="text-sm text-destructive/80">You are currently logged in with your Duress Password. Real vault data is hidden.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* DURESS / PANIC MODE SETUP CARD */}
      <Card className="glass-card border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              <CardTitle>Panic Mode (Duress Password)</CardTitle>
            </div>
            <Badge variant="outline" className="border-emerald-500 text-emerald-500">
              High Impact Security
            </Badge>
          </div>
          <CardDescription>
            Configure a secondary emergency password. If forced to unlock your account under physical threat, enter your Panic Password during Sign In. SecureVault will immediately display a decoy empty vault and trigger a silent critical alert.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSetupDuress} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="duress-pass">Set Panic / Duress Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="duress-pass"
                  type="password"
                  placeholder="e.g. Panic999!"
                  className="pl-9"
                  value={duressPass}
                  onChange={(e) => setDuressPass(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="btn-gradient" disabled={isSaving}>
              {isSaving ? 'Configuring Panic Mode...' : 'Save Panic Password'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ALERTS HISTORY CARD */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>
            <AlertTriangle className="inline mr-2 h-5 w-5" />
            Alert History ({securityAlerts.filter(a => !a.isRead).length} unread)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {securityAlerts.length === 0 ? (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="font-semibold mb-2">All Clear</h3>
              <p className="text-muted-foreground">No security alerts detected</p>
            </div>
          ) : (
            <div className="space-y-3">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className={`flex items-start gap-3 p-4 rounded-lg border ${getSeverityStyle(alert.severity)}`}>
                  <AlertTriangle className="h-5 w-5 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className={`font-medium ${!alert.isRead ? '' : 'opacity-70'}`}>{alert.message}</p>
                      {!alert.isRead && <Badge variant="destructive" className="text-xs">New</Badge>}
                    </div>
                    <p className="text-xs opacity-70 mt-1">{new Date(alert.timestamp).toLocaleString()}</p>
                  </div>
                  {!alert.isRead && (
                    <Button variant="ghost" size="sm" onClick={() => markAlertRead(alert.id)}>
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Mark Read
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
