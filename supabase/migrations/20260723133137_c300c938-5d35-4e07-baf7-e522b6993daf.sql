CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a booking"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);