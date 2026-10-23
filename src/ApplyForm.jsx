import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Submissions go straight to the existing Google Form so responses stay in its Responses tab / Sheet.
// If questions in the Google Form are edited or recreated, their entry ids may change — update ENTRY.
const FORM_ID = '1FAIpQLSfiUt12DTpa9oGtrc81gEAty2Ho0cMG__pn72ZDmlpYEqKu_Q';
const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;

const ENTRY = {
    purpose: 'entry.1235725920',
    name: 'entry.57103771',
    email: 'entry.2099519546',
    phone: 'entry.1315232998',
    dob: 'entry.1042020271',
    program: 'entry.1793929832',
    country: 'entry.1695638388',
    joinYear: 'entry.1955894059',
    notes: 'entry.2112438505',
};

const OTHER = '__other_option__';

const PURPOSES = ['Career', 'Recreational', 'Personal Goals'];
const PROGRAMS = [
    'Full Pilots programme',
    'Partial Pilots programme',
    'Air Traffic Controllers',
    'Aviation Technical Training',
    'Aviation Management',
];
const COUNTRIES = ['United Kingdom', 'United States of America', 'Canada'];

const currentYear = new Date().getFullYear();
const JOIN_YEARS = Array.from({ length: 6 }, (_, i) => currentYear + i);

const initialValues = {
    purpose: '',
    purposeOther: '',
    name: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    programOther: '',
    country: '',
    joinYear: '',
    notes: '',
};

const inputClass = 'w-full rounded-xl border border-gray-300 px-4 py-3 text-navy-900 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40';
const labelClass = 'block font-semibold text-navy-900 mb-2';

const buildBody = (values) => {
    const body = new URLSearchParams();
    const addChoice = (entry, value, other) => {
        if (!value) return;
        body.append(entry, value);
        if (value === OTHER) body.append(`${entry}.other_option_response`, other.trim());
    };
    const addDate = (entry, year, month, day) => {
        body.append(`${entry}_year`, year);
        body.append(`${entry}_month`, month);
        body.append(`${entry}_day`, day);
    };

    addChoice(ENTRY.purpose, values.purpose, values.purposeOther);
    body.append(ENTRY.name, values.name.trim());
    body.append(ENTRY.email, values.email.trim());
    if (values.phone.trim()) body.append(ENTRY.phone, values.phone.trim());
    if (values.dob) {
        const [year, month, day] = values.dob.split('-');
        addDate(ENTRY.dob, year, month, day);
    }
    addChoice(ENTRY.program, values.program, values.programOther);
    if (values.country) body.append(ENTRY.country, values.country);
    // The Google question is a date field, so the chosen year is stored as 1 January of that year.
    if (values.joinYear) addDate(ENTRY.joinYear, values.joinYear, '1', '1');
    if (values.notes.trim()) body.append(ENTRY.notes, values.notes.trim());
    return body;
};

const ChoiceGroup = ({ legend, name, options, value, otherValue, onChange, required, allowOther }) => (
    <fieldset>
        <legend className={labelClass}>
            {legend} {required && <span className="text-sky-600">*</span>}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map((option) => (
                <label key={option} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-sky-400 has-[:checked]:border-sky-400 has-[:checked]:bg-sky-50">
                    <input type="radio" name={name} value={option} checked={value === option} onChange={onChange} required={required} className="accent-sky-500" />
                    <span className="text-gray-700">{option}</span>
                </label>
            ))}
            {allowOther && (
                <label className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 cursor-pointer hover:border-sky-400 has-[:checked]:border-sky-400 has-[:checked]:bg-sky-50">
                    <input type="radio" name={name} value={OTHER} checked={value === OTHER} onChange={onChange} required={required} className="accent-sky-500" />
                    <span className="text-gray-700">Other</span>
                </label>
            )}
        </div>
        {allowOther && value === OTHER && (
            <input
                type="text"
                name={`${name}Other`}
                value={otherValue}
                onChange={onChange}
                required
                placeholder="Please specify"
                aria-label={`${legend}: other`}
                className={`${inputClass} mt-3`}
            />
        )}
    </fieldset>
);

const ApplyForm = () => {
    const [values, setValues] = useState(initialValues);
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            // Google Forms doesn't send CORS headers, so the response is opaque; a resolved fetch is the best signal available.
            await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body: buildBody(values) });
            setStatus('success');
            setValues(initialValues);
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <CheckCircle className="h-16 w-16 text-sky-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Application Received</h3>
                <p className="text-gray-600 mb-8">Thank you for applying to Aviation Routes. Our team will be in touch with you shortly.</p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sky-600 font-semibold hover:text-navy-900 transition-colors"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg space-y-8 text-left">
            <ChoiceGroup
                legend="Primary Purpose of Study"
                name="purpose"
                options={PURPOSES}
                value={values.purpose}
                otherValue={values.purposeOther}
                onChange={handleChange}
                required
                allowOther
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="apply-name" className={labelClass}>Applicant Full Name <span className="text-sky-600">*</span></label>
                    <input id="apply-name" type="text" name="name" value={values.name} onChange={handleChange} required autoComplete="name" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="apply-email" className={labelClass}>Professional Email <span className="text-sky-600">*</span></label>
                    <input id="apply-email" type="email" name="email" value={values.email} onChange={handleChange} required autoComplete="email" placeholder="name@example.com" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="apply-phone" className={labelClass}>Telephone Number</label>
                    <input id="apply-phone" type="tel" name="phone" value={values.phone} onChange={handleChange} autoComplete="tel" placeholder="+1718XXXXXXX" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="apply-dob" className={labelClass}>Date of Birth</label>
                    <input id="apply-dob" type="date" name="dob" value={values.dob} onChange={handleChange} autoComplete="bday" className={inputClass} />
                </div>
            </div>

            <ChoiceGroup
                legend="Desired Aviation Program"
                name="program"
                options={PROGRAMS}
                value={values.program}
                otherValue={values.programOther}
                onChange={handleChange}
                required
                allowOther
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="apply-country" className={labelClass}>Preferred Country</label>
                    <select id="apply-country" name="country" value={values.country} onChange={handleChange} className={inputClass}>
                        <option value="">No preference</option>
                        {COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="apply-year" className={labelClass}>Expected Year of Joining</label>
                    <select id="apply-year" name="joinYear" value={values.joinYear} onChange={handleChange} className={inputClass}>
                        <option value="">Select a year</option>
                        {JOIN_YEARS.map((year) => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="apply-notes" className={labelClass}>Additional Information or Concerns</label>
                <textarea
                    id="apply-notes"
                    name="notes"
                    rows={4}
                    value={values.notes}
                    onChange={handleChange}
                    placeholder="Please provide any additional information or concerns that may help us assist you more effectively."
                    className={inputClass}
                />
            </div>

            {status === 'error' && (
                <p role="alert" className="rounded-xl bg-red-50 text-red-700 px-4 py-3">
                    Something went wrong sending your application. Please try again, or{' '}
                    <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">apply via Google Forms</a>.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full sm:w-auto items-center justify-center bg-navy-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-sky-400 hover:text-navy-900 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Submitting…' : 'Submit Application'} <ArrowRight className="ml-2 h-5 w-5" />
            </button>
        </form>
    );
};

export default ApplyForm;
