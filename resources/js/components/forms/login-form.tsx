import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, ClipboardList, GraduationCap, LoaderCircle } from 'lucide-react';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import InputError from '../shared/input-error';
import { Checkbox } from '../ui/checkbox';
import TextLink from '../shared/text-link';
import { toast } from 'react-toastify';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function LoginForm() {
    const [role, setRole] = useState<'student' | 'professor' | 'secretary' | null>(null);
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });
    
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onError: (e) => {
                console.log('handleSubmit error : ', e)
                toast.error("Erreur de connexion, veuillez vérifier vos identifiants.");
            },
            onFinish: () => {
                reset('password');
            },
        });
    };

        

    return (
        <Card className="mx-auto w-full max-w-5xl space-y-6 border-indigo-100 py-10 shadow-lg">
            <CardHeader className="rounded-t-lg pb-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
                <CardDescription className="text-indigo-100">Accédez à votre espace personnel</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center pt-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <h3 className="mb-4 text-lg font-medium text-indigo-800">Je suis:</h3>
                        <RadioGroup
                            value={role || ''}
                            onValueChange={(value) => setRole(value as 'student' | 'professor' | 'secretary')}
                            className="grid grid-cols-1 gap-4 md:grid-cols-3"
                        >
                            <div>
                                <Label
                                    htmlFor="login-student"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'student' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="student" id="login-student" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className={`h-5 w-5 ${role === 'student' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Élève</span>
                                    </div>
                                </Label>
                            </div>

                            <div>
                                <Label
                                    htmlFor="login-professor"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'professor' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="professor" id="login-professor" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <BookOpen className={`h-5 w-5 ${role === 'professor' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Professeur</span>
                                    </div>
                                </Label>
                            </div>

                            <div>
                                <Label
                                    htmlFor="login-secretary"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'secretary' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="secretary" id="login-secretary" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <ClipboardList className={`h-5 w-5 ${role === 'secretary' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Secrétaire Général</span>
                                    </div>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <AnimatePresence mode="wait">
                        {role && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="saisir votre email"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Mot de passe</Label>
                                        <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={5}>
                                            Mode de passe oublié?
                                        </TextLink>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onClick={() => setData('remember', !data.remember)}
                                        tabIndex={3}
                                    />
                                    <Label htmlFor="remember">Se souvenir de moi</Label>
                                </div>

                                <div className="space-y-1">
                                    <Link href="/forgot-password" className="text-sm text-indigo-600 transition-colors hover:text-indigo-800">
                                        Mot de passe oublié?
                                    </Link>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 hover:from-indigo-700 hover:to-purple-700"
                                        tabIndex={4}
                                        disabled={processing}
                                    >
                                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        <div className="flex items-center justify-center">
                                            Se connecter
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 rounded-b-lg border-t border-gray-100 bg-gray-50">
                <p className="text-center text-sm text-gray-600">
                    Vous n'avez pas encore de compte?{' '}
                    <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-800">
                        S'inscrire
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
