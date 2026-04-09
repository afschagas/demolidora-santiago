# Como liberar o Vite (porta 5173) no Firewall do Windows

Para acessar o projeto em outro dispositivo da rede (`http://192.168.x.x:5173`), o Windows precisa **permitir conexões de entrada** na porta do servidor de desenvolvimento.

---

## Opção A — Assistente gráfico (recomendado)

1. Pressione **Win + R**, digite `wf.msc` e pressione **Enter**  
   *(ou: Painel de Controle → Sistema e Segurança → Firewall do Windows Defender → Configurações avançadas)*.

2. Clique em **Regras de Entrada** (Inbound Rules) → **Nova regra…** (New Rule…).

3. Escolha **Porta** → **Avançar**.

4. **TCP** → **Portas locais específicas**: digite `5173` → **Avançar**.

5. **Permitir a conexão** → **Avançar**.

6. Marque **Domínio**, **Particular** e **Público** conforme sua rede (em casa, **Particular** costuma bastar) → **Avançar**.

7. Nome: por exemplo `Vite dev 5173` → **Concluir**.

**Preview do build** (`npm run preview`) usa a porta **4173**; repita os passos com a porta `4173` se precisar testar o preview na LAN.

---

## Opção B — PowerShell (como administrador)

1. Abra o **PowerShell** ou **Terminal** como **Administrador** (botão direito → Executar como administrador).

2. Execute:

```powershell
New-NetFirewallRule -DisplayName "Vite dev - porta 5173" -Direction Inbound -Protocol TCP -LocalPort 5173 -Action Allow -Profile Private,Domain
```

*(Opcional, para `npm run preview`:)*

```powershell
New-NetFirewallRule -DisplayName "Vite preview - porta 4173" -Direction Inbound -Protocol TCP -LocalPort 4173 -Action Allow -Profile Private,Domain
```

3. Se aparecer erro de permissão, confirme que o terminal está **elevado** (administrador).

---

## Opção C — Permitir o Node.js

Se preferir liberar o executável em vez da porta:

1. `wf.msc` → **Regras de Entrada** → **Nova regra…** → **Programa** → **Avançar**.

2. **Caminho do programa**: navegue até o `node.exe` (ex.: `C:\Program Files\nodejs\node.exe`).

3. **Permitir a conexão** → defina perfis e nome (ex.: `Node.js`).

*Obs.: isso libera o Node de forma ampla; a regra por **porta** (A ou B) é mais específica.*

---

## Conferir

- O PC que roda `npm run dev` deve ter IP fixo na LAN ou você usa o IP atual (`ipconfig` → **Endereço IPv4**).
- Celular/outro PC na **mesma rede Wi‑Fi** (sem “isolamento de cliente” no roteador).
- Reinicie `npm run dev` após mudar o `vite.config.ts` (`server.host: true`).

---

## Remover a regra depois

- **wf.msc** → Regras de Entrada → localize a regra criada → **Excluir**.

Ou no PowerShell (admin):

```powershell
Remove-NetFirewallRule -DisplayName "Vite dev - porta 5173"
```
