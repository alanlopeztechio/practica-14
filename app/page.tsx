import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Contenido Protegido
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Para acceder al contenido de esta página necesitas iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Esta página contiene información exclusiva para usuarios
              registrados.
            </p>
            <p className="mt-2">Por favor, inicia sesión para continuar.</p>
          </div>

          <Link href="/login" className="block">
            <SignInButton>
              <Button className="w-full" size="lg">
                <User className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Button>
            </SignInButton>
          </Link>

          <div className="text-center text-xs text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Regístrate aquí
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
