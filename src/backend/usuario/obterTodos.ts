'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function obterTodos(){

    return await prisma.usuario.findMany();
}