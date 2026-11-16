"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, ContactFormSchemaType } from "@/lib/validations";

const services = [
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "AI Integration",
  "Open Source Collaboration",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchemaType) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-input border border-border text-primary text-sm font-mono px-4 py-3 rounded-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 bg-secondary border border-border p-8 rounded-sm"
    >
      <h2 className="text-2xl font-bold font-mono text-accent mb-2">
        Let&apos;s work together
      </h2>
      <p className="text-sm font-mono text-secondary mb-7">
        Have a project idea, collaboration opportunity or just want to connect? Feel free to
        send me a message.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input {...register("firstName")} placeholder="First name" className={inputClass} />
            {errors.firstName && (
              <p className="text-xs text-red-400 mt-1 font-mono">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input {...register("lastName")} placeholder="Last name" className={inputClass} />
            {errors.lastName && (
              <p className="text-xs text-red-400 mt-1 font-mono">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1 font-mono">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone number (optional)"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <select {...register("service")} className={`${inputClass} cursor-pointer`} defaultValue="">
            <option value="" disabled className="bg-secondary">
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-secondary">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-xs text-red-400 mt-1 font-mono">{errors.service.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Type your message here."
            className={`${inputClass} resize-none`}
          />
          {errors.message && (
            <p className="text-xs text-red-400 mt-1 font-mono">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-fit px-7 py-3 bg-accent text-black text-sm font-mono font-semibold rounded-full hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </motion.button>

        {status === "success" && (
          <p className="text-sm font-mono text-accent">✓ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-sm font-mono text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
}
