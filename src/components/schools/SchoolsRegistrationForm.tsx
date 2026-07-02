import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import logo from "../../assets/cf-logo.png";

type SchoolsRegistrationFormProps = {
  onBack: () => void;
};

type FormValues = {
  schoolName: string;
  title: string;
  principalName: string;
  cellphone: string;
  email: string;
  province: string;
  cityTown: string;
  schoolPhase: string;
  curriculum: string;
  learnerEnrolment: string;
  emisNumber: string;
  interests: string[];
  parentCommunication: string;
  heardAbout: string;
  comments: string;
  consent: boolean;
};

const initialValues: FormValues = {
  schoolName: "",
  title: "",
  principalName: "",
  cellphone: "",
  email: "",
  province: "",
  cityTown: "",
  schoolPhase: "",
  curriculum: "",
  learnerEnrolment: "",
  emisNumber: "",
  interests: [],
  parentCommunication: "",
  heardAbout: "",
  comments: "",
  consent: false,
};

const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];

const schoolPhases = [
  "Foundation Phase",
  "Intermediate Phase",
  "Senior Phase",
  "FET Phase",
  "Combined School",
];

const curricula = ["CAPS", "IEB", "Cambridge", "Other"];

const communicationOptions = [
  "WhatsApp",
  "Bulk SMS",
  "Email",
  "School app",
  "Parent meetings",
  "Other",
];

const referralSources = [
  "Connect+Funda team",
  "Another school",
  "Social media",
  "WhatsApp",
  "Google search",
  "Other",
];

const interestOptions = [
  {
    value: "referral-programme",
    label:
      "🤝 Referral Partner Programme — earn R25/learner/year (paid quarterly) by sharing your school code with parents",
  },
  {
    value: "bulk-sms",
    label:
      "📱 Bulk SMS Service — reliable, affordable parent communication with live delivery reports",
  },
  {
    value: "more-information",
    label: "📋 Please send me more information first",
  },
];

type FieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, required, hint, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-[.72rem] font-bold uppercase tracking-[0.11em] text-cf-muted">
        {label} {required && <span className="text-cf-orange">*</span>}
      </span>

      {children}

      {error ? (
        <span className="mt-2 block text-[.75rem] font-medium text-red-600">
          {error}
        </span>
      ) : (
        hint && (
          <span className="mt-2 block text-[.72rem] leading-relaxed text-cf-muted/75">
            {hint}
          </span>
        )
      )}
    </label>
  );
}

const inputClass =
  "w-full rounded-[12px] border-[1.5px] border-cf-line bg-white px-4 py-3.5 font-body text-[.95rem] text-cf-ink outline-none transition placeholder:text-cf-muted/60 focus:border-cf-orange focus:shadow-[0_0_0_4px_rgba(242,104,42,.12)]";

export default function SchoolsRegistrationForm({
  onBack,
}: SchoolsRegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormValues>(
    field: K,
    value: FormValues[K],
  ) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  function handleInterestChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      interests: checked
        ? [...currentValues.interests, value]
        : currentValues.interests.filter((interest) => interest !== value),
    }));
  }

  function validateStep(currentStep: number) {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!values.schoolName.trim()) {
        nextErrors.schoolName = "School / institution name is required";
      }

      if (!values.principalName.trim()) {
        nextErrors.principalName = "Principal's full name is required";
      }

      if (!values.cellphone.trim()) {
        nextErrors.cellphone = "Cellphone is required";
      }

      if (!values.email.trim()) {
        nextErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        nextErrors.email = "Please enter a valid email address";
      }

      if (!values.province) {
        nextErrors.province = "Province is required";
      }

      if (!values.schoolPhase) {
        nextErrors.schoolPhase = "School phase is required";
      }
    }

    if (currentStep === 3 && !values.consent) {
      nextErrors.consent = "Please agree before submitting";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function goToNextStep() {
    if (!validateStep(step)) return;

    setStep((currentStep) => Math.min(currentStep + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToPreviousStep() {
    setStep((currentStep) => Math.max(currentStep - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateStep(3)) return;

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      setSubmitError(
        "The form is not configured correctly yet. Please try again later.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({
          ...values,
          formType: "schools",
        }),
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Something went wrong while sending your registration. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#FFFCF8] pb-16">
        <header className="bg-cf-navy">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-7">
            <img
              src={logo}
              alt="Connect+Funda Mobile"
              className="h-[42px] w-auto brightness-0 invert opacity-95"
            />

            <button
              type="button"
              onClick={onBack}
              className="rounded-lg border border-white/15 px-4 py-2 text-[.82rem] font-medium text-white/70 transition hover:border-white/35 hover:text-white"
            >
              ← Back to overview
            </button>
          </div>

          <div className="h-1 w-[54%] bg-cf-orange" />
        </header>

        <div className="mx-auto flex min-h-[70vh] max-w-[720px] items-center px-6 py-16 text-center sm:py-20">
          <div className="w-full rounded-[28px] border border-cf-line bg-white px-6 py-12 shadow-[0_22px_55px_-38px_rgba(27,34,44,.3)] sm:px-12 sm:py-14">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cf-orange font-display text-[2rem] font-bold text-white">
              ✓
            </div>

            <p className="mt-7 font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
              Registration received
            </p>

            <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.55rem]">
              Your school is on the list.
            </h1>

            <p className="mx-auto mt-5 max-w-[520px] text-[.98rem] leading-relaxed text-cf-muted">
              Thank you for registering your interest in the Connect+Funda
              Schools Partnership Programme. Our team will follow up within 48
              hours with your referral code and full briefing pack.
            </p>

            <button
              type="button"
              onClick={onBack}
              className="mt-8 rounded-full bg-cf-orange px-7 py-3.5 font-display text-[.95rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk"
            >
              Back to overview
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FFFCF8] pb-16">
      <header className="bg-cf-navy">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-7">
          <img
            src={logo}
            alt="Connect+Funda Mobile"
            className="h-[42px] w-auto brightness-0 invert opacity-95"
          />

          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-white/15 px-4 py-2 text-[.82rem] font-medium text-white/70 transition hover:border-white/35 hover:text-white"
          >
            ← Back to overview
          </button>
        </div>

        <div className="h-1 w-[54%] bg-cf-orange" />
      </header>

      <div className="mx-auto max-w-[920px] px-6 pt-12 sm:pt-16">
        <div className="text-center">
          <p className="font-display text-[.76rem] font-bold uppercase tracking-[.15em] text-cf-orange">
            Register Interest
          </p>

          <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-cf-navy sm:text-[2.45rem]">
            Register Your School
          </h1>

          <p className="mt-4 text-[.98rem] text-cf-muted">
            Takes 3 minutes. We follow up within 48 hours with your school
            referral code.
          </p>
        </div>

        <form className="mt-10" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <section className="rounded-[24px] border border-cf-line bg-white p-6 shadow-[0_18px_45px_-34px_rgba(27,34,44,.25)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cf-navy font-display text-[1rem] font-bold text-cf-orange">
                    1
                  </span>

                  <div className="h-px flex-1 bg-cf-line" />

                  <p className="font-display text-[.74rem] font-bold uppercase tracking-[.12em] text-cf-muted">
                    About your school
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field
                      label="School / institution name"
                      required
                      error={errors.schoolName}
                    >
                      <input
                        className={inputClass}
                        placeholder="e.g. Greenfields High School"
                        value={values.schoolName}
                        onChange={(event) =>
                          updateField("schoolName", event.target.value)
                        }
                      />
                    </Field>
                  </div>

                  <Field label="Title" error={errors.title}>
                    <select
                      className={inputClass}
                      value={values.title}
                      onChange={(event) =>
                        updateField("title", event.target.value)
                      }
                    >
                      <option value="">Select…</option>
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                    </select>
                  </Field>

                  <Field
                    label="Principal's full name"
                    required
                    error={errors.principalName}
                  >
                    <input
                      className={inputClass}
                      placeholder="Your full name"
                      value={values.principalName}
                      onChange={(event) =>
                        updateField("principalName", event.target.value)
                      }
                    />
                  </Field>

                  <Field label="Cellphone" required error={errors.cellphone}>
                    <input
                      className={inputClass}
                      placeholder="e.g. 082 555 1234"
                      type="tel"
                      value={values.cellphone}
                      onChange={(event) =>
                        updateField("cellphone", event.target.value)
                      }
                    />
                  </Field>

                  <Field label="Email address" required error={errors.email}>
                    <input
                      className={inputClass}
                      placeholder="principal@school.co.za"
                      type="email"
                      value={values.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                    />
                  </Field>

                  <Field label="Province" required error={errors.province}>
                    <select
                      className={inputClass}
                      value={values.province}
                      onChange={(event) =>
                        updateField("province", event.target.value)
                      }
                    >
                      <option value="">— Select —</option>

                      {provinces.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="City / town" error={errors.cityTown}>
                    <input
                      className={inputClass}
                      placeholder="e.g. Ekurhuleni"
                      value={values.cityTown}
                      onChange={(event) =>
                        updateField("cityTown", event.target.value)
                      }
                    />
                  </Field>

                  <Field
                    label="School phase"
                    required
                    error={errors.schoolPhase}
                  >
                    <select
                      className={inputClass}
                      value={values.schoolPhase}
                      onChange={(event) =>
                        updateField("schoolPhase", event.target.value)
                      }
                    >
                      <option value="">— Select —</option>

                      {schoolPhases.map((phase) => (
                        <option key={phase} value={phase}>
                          {phase}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Curriculum" error={errors.curriculum}>
                    <select
                      className={inputClass}
                      value={values.curriculum}
                      onChange={(event) =>
                        updateField("curriculum", event.target.value)
                      }
                    >
                      <option value="">— Select —</option>

                      {curricula.map((curriculum) => (
                        <option key={curriculum} value={curriculum}>
                          {curriculum}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Approx. learner enrolment"
                    hint="Enter number to see your earning potential"
                  >
                    <input
                      className={inputClass}
                      placeholder="e.g. 850"
                      inputMode="numeric"
                      value={values.learnerEnrolment}
                      onChange={(event) =>
                        updateField("learnerEnrolment", event.target.value)
                      }
                    />
                  </Field>

                  <Field
                    label="EMIS / school number"
                    hint="Found on your school registration documents"
                  >
                    <input
                      className={inputClass}
                      placeholder="Optional"
                      value={values.emisNumber}
                      onChange={(event) =>
                        updateField("emisNumber", event.target.value)
                      }
                    />
                  </Field>
                </div>
              </section>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="rounded-full bg-cf-orange px-7 py-3.5 font-display text-[.95rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk"
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <section className="rounded-[24px] border border-cf-line bg-white p-6 shadow-[0_18px_45px_-34px_rgba(27,34,44,.25)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cf-navy font-display text-[1rem] font-bold text-cf-orange">
                    2
                  </span>

                  <div className="h-px flex-1 bg-cf-line" />

                  <p className="font-display text-[.74rem] font-bold uppercase tracking-[.12em] text-cf-muted">
                    What interests you?
                  </p>
                </div>

                <p className="mt-7 text-center text-[.94rem] text-cf-muted">
                  Select everything that applies — no commitment required at
                  this stage.
                </p>

                <div className="mt-5 space-y-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest.value}
                      className="flex cursor-pointer items-start gap-3 rounded-[13px] border border-cf-line bg-[#FFFCF8] px-4 py-4 transition hover:border-cf-orange/45"
                    >
                      <input
                        type="checkbox"
                        value={interest.value}
                        checked={values.interests.includes(interest.value)}
                        onChange={handleInterestChange}
                        className="mt-0.5 h-5 w-5 rounded border-cf-line accent-cf-orange"
                      />

                      <span className="text-[.89rem] leading-relaxed text-cf-muted">
                        {interest.label}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="rounded-full border border-cf-line px-6 py-3.5 font-display text-[.92rem] font-bold text-cf-navy transition hover:border-cf-orange hover:text-cf-orange"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={goToNextStep}
                  className="rounded-full bg-cf-orange px-7 py-3.5 font-display text-[.95rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk"
                >
                  Continue →
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <section className="rounded-[24px] border border-cf-line bg-white p-6 shadow-[0_18px_45px_-34px_rgba(27,34,44,.25)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cf-navy font-display text-[1rem] font-bold text-cf-orange">
                    3
                  </span>

                  <div className="h-px flex-1 bg-cf-line" />

                  <p className="font-display text-[.74rem] font-bold uppercase tracking-[.12em] text-cf-muted">
                    A few quick questions
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  <Field
                    label="How do you currently communicate with parents?"
                    error={errors.schoolName}
                  >
                    <select
                      className={inputClass}
                      value={values.parentCommunication}
                      onChange={(event) =>
                        updateField("parentCommunication", event.target.value)
                      }
                    >
                      <option value="">— Select —</option>

                      {communicationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="How did you hear about Connect+Funda?"
                    error={errors.schoolName}
                  >
                    <select
                      className={inputClass}
                      value={values.heardAbout}
                      onChange={(event) =>
                        updateField("heardAbout", event.target.value)
                      }
                    >
                      <option value="">— Select —</option>

                      {referralSources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Any questions or comments for us?"
                    error={errors.schoolName}
                  >
                    <textarea
                      className={`${inputClass} min-h-[124px] resize-y`}
                      placeholder="Optional — anything you'd like us to know before we call..."
                      value={values.comments}
                      onChange={(event) =>
                        updateField("comments", event.target.value)
                      }
                    />
                  </Field>
                </div>
              </section>

              <label className="mt-5 flex cursor-pointer items-start gap-4 rounded-[20px] border border-cf-line bg-white p-6 shadow-[0_18px_45px_-34px_rgba(27,34,44,.2)]">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) =>
                    updateField("consent", event.target.checked)
                  }
                  className="mt-0.5 h-5 w-5 rounded border-cf-line accent-cf-orange"
                />

                <span className="text-[.9rem] leading-[1.65] text-cf-muted">
                  <strong className="font-bold text-cf-navy">I agree</strong>{" "}
                  that Connect+Funda Mobile (Enthucate Tech Pty Ltd) may contact
                  me regarding the Schools Partnership Programme using the
                  details I&apos;ve provided. I understand this is not a binding
                  commitment and I can withdraw at any time. Terms &amp;
                  conditions apply. <span className="text-cf-orange">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="mt-3 text-center text-[.8rem] font-medium text-red-600">
                  {errors.consent}
                </p>
              )}

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="rounded-full border border-cf-line px-6 py-3.5 font-display text-[.92rem] font-bold text-cf-navy transition hover:border-cf-orange hover:text-cf-orange"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-cf-orange px-7 py-3.5 font-display text-[.95rem] font-bold text-white shadow-[0_18px_30px_-18px_rgba(242,104,42,.9)] transition hover:-translate-y-0.5 hover:bg-cf-orangeDk disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting
                    ? "Sending registration..."
                    : "Register My School →"}
                </button>
              </div>

              {submitError && (
                <p className="mt-4 text-center text-[.82rem] font-medium text-red-600">
                  {submitError}
                </p>
              )}

              <p className="mt-4 text-center text-[.8rem] text-cf-muted/75">
                No commitment · No upfront cost · We follow up within 48 hours
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
