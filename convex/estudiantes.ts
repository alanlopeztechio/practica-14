import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const obtenerEstudiantes = query({
  handler: async (ctx) => {
    return await ctx.db.query("estudiantes").collect();
  },
});

export const obtenerEstudiantesPorId = query({
  args: { id: v.id("estudiantes") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const editarEstudiante = mutation({
  args: {
    id: v.id("estudiantes"),
    numMatricula: v.string(),
    nombre: v.string(),
    correo: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, numMatricula, nombre, correo } = args;
    return ctx.db.patch(id, { numMatricula, nombre, correo });
  },
});

export const crearEstudiante = mutation({
  args: {
    numMatricula: v.string(),
    nombre: v.string(),
    correo: v.string(),
  },
  handler: async (ctx, args) => {
    const { numMatricula, nombre, correo } = args;
    return ctx.db.insert("estudiantes", { numMatricula, nombre, correo });
  },
});

export const eliminarEstudiante = mutation({
  args: {
    id: v.id("estudiantes"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
