import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function CriarConta() {
  return (
    <div className="h-full flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Criar conta</CardTitle>
          <CardDescription>
            Insira suas informações para criar uma conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Primeiro nome</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Último nome</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" required />
            </div>
            <Button type="submit" className="w-full">
              Criar conta
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="underline">
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}