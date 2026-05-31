import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useT } from '@/context/language-context'

interface FormErrors {
  name?: string
  email?: string
  date?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { t } = useT()
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const date = String(data.get('date') ?? '').trim()

    const nextErrors: FormErrors = {}
    if (!name) nextErrors.name = t.contact.errors.name
    if (!EMAIL_RE.test(email)) nextErrors.email = t.contact.errors.email
    if (!date) nextErrors.date = t.contact.errors.date

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // ── Front-end only. Wire a real backend here ──────────────────────────
    // e.g. POST the FormData to /api/reservations or an email service
    // (Formspree, Resend, Vercel serverless fn). Then handle loading/errors.
    // ──────────────────────────────────────────────────────────────────────
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.subtitle}
      />

      <div className="bg-card mx-auto mt-12 max-w-xl rounded-3xl border-2 p-6 shadow-sm sm:p-8">
        {submitted ? (
          <div role="status" className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="text-primary size-12" aria-hidden="true" />
            <p className="text-pretty">{t.contact.success}</p>
            <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
              {t.contact.submit}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label={t.contact.labels.name}
                error={errors.name}
                placeholder={t.contact.placeholders.name}
                autoComplete="name"
              />
              <Field
                id="email"
                type="email"
                label={t.contact.labels.email}
                error={errors.email}
                placeholder={t.contact.placeholders.email}
                autoComplete="email"
              />
              <Field
                id="date"
                type="datetime-local"
                label={t.contact.labels.date}
                error={errors.date}
              />
              <div className="flex flex-col gap-2">
                <Label htmlFor="partySize">{t.contact.labels.partySize}</Label>
                <Input
                  id="partySize"
                  name="partySize"
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={2}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">{t.contact.labels.message}</Label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder={t.contact.placeholders.message}
              />
            </div>

            <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto sm:self-end">
              {t.contact.submit}
            </Button>
          </form>
        )}
      </div>
    </Section>
  )
}

/* Local helper: a labelled input with inline validation error + a11y wiring. */
interface FieldProps extends React.ComponentProps<typeof Input> {
  id: string
  label: string
  error?: string
}

function Field({ id, label, error, ...props }: FieldProps) {
  const errorId = `${id}-error`
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-destructive text-sm">
          {error}
        </p>
      )}
    </div>
  )
}
