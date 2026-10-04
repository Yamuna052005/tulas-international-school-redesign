import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Phone } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Field, { controlClass } from '../ui/Field';
import { Reveal } from '../animation/Reveal';
import { CLASSES, COUNTRY_CODES, SCHOOL, STATES } from '../../data/site';

const INITIAL_VALUES = { name: '', code: '+91', phone: '', studentClass: '', state: '', consent: false };
const FIELD_ORDER = ['name', 'phone', 'studentClass', 'state', 'consent'];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Enter the parent or guardian’s name.';
  if (!/^\d{7,12}$/.test(values.phone.replace(/[\s-]/g, ''))) errors.phone = 'Enter a phone number using digits only.';
  if (!values.studentClass) errors.studentClass = 'Select the class your child is applying for.';
  if (!values.state) errors.state = 'Select your state.';
  if (!values.consent) errors.consent = 'Agree to be contacted so we can respond to your enquiry.';
  return errors;
}

/**
 * Front-end only: validates and shows a confirmation. There is no backend or OTP step,
 * so nothing is sent anywhere (see README, "Known limitations").
 */
export default function Enquire() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'done'
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(`enq-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    timerRef.current = window.setTimeout(() => setStatus('done'), 900);
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus('idle');
  };

  const describe = (field) => (errors[field] ? `enq-${field}-error` : undefined);

  return (
    <Section id="enquire" labelledBy="enquire-title">
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="on-navy flex flex-col justify-between rounded-3xl bg-navy p-8 text-white md:p-12 lg:col-span-2">
          <div>
            <h2 id="enquire-title" className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Enquire now
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Tell us a little about your child. Our admissions team will call you back.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            <a href={SCHOOL.helplineHref} className="flex min-h-12 items-center gap-3 text-lg font-semibold">
              <Phone size={20} aria-hidden="true" />
              {SCHOOL.helpline}
            </a>
            <Button href={SCHOOL.applyUrl}>Apply now</Button>
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-line bg-surface p-6 md:p-10 lg:col-span-3">
          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'done' ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex min-h-[24rem] flex-col items-start justify-center gap-4"
                >
                  <CheckCircle2 size={48} className="text-accent" aria-hidden="true" />
                  <h3 className="font-display text-3xl font-bold">Thank you, {values.name.trim()}.</h3>
                  <p className="max-w-md text-lg text-muted">
                    Our admissions team will call you on {values.code} {values.phone} about{' '}
                    {values.studentClass}.
                  </p>
                  <Button variant="ink" onClick={handleReset}>
                    Send another enquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div className="sm:col-span-2">
                    <Field id="enq-name" label="Parent or guardian name" error={errors.name}>
                      <input
                        id="enq-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={describe('name')}
                        className={controlClass}
                      />
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <Field id="enq-phone" label="Phone number" error={errors.phone}>
                      <div className="flex gap-2">
                        <select
                          name="code"
                          aria-label="Country code"
                          value={values.code}
                          onChange={handleChange}
                          className={`${controlClass} !w-28 shrink-0`}
                        >
                          {COUNTRY_CODES.map((code) => (
                            <option key={code} value={code}>
                              {code}
                            </option>
                          ))}
                        </select>
                        <input
                          id="enq-phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          value={values.phone}
                          onChange={handleChange}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={describe('phone')}
                          className={controlClass}
                        />
                      </div>
                    </Field>
                  </div>

                  <Field id="enq-studentClass" label="Class" error={errors.studentClass}>
                    <select
                      id="enq-studentClass"
                      name="studentClass"
                      value={values.studentClass}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.studentClass)}
                      aria-describedby={describe('studentClass')}
                      className={controlClass}
                    >
                      <option value="">Select class</option>
                      {CLASSES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="enq-state" label="State" error={errors.state}>
                    <select
                      id="enq-state"
                      name="state"
                      autoComplete="address-level1"
                      value={values.state}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.state)}
                      aria-describedby={describe('state')}
                      className={controlClass}
                    >
                      <option value="">Select state</option>
                      {STATES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <div className="flex items-start gap-3">
                      <input
                        id="enq-consent"
                        name="consent"
                        type="checkbox"
                        checked={values.consent}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={describe('consent')}
                        className="mt-1 h-5 w-5 shrink-0 accent-[#F5B800]"
                      />
                      <label htmlFor="enq-consent" className="text-sm leading-relaxed text-muted">
                        I agree to receive information regarding my submitted application by signing up
                        on Tulas International School, Dehradun
                      </label>
                    </div>
                    {errors.consent && (
                      <p id="enq-consent-error" role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <Button type="submit" variant="ink" disabled={status === 'sending'} className="w-full sm:w-auto">
                      {status === 'sending' ? 'Sending…' : 'Enquire now'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
