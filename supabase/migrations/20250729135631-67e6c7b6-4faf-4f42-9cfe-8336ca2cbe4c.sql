-- Make the first user who signs up an admin (you can change this later)
-- This is a temporary solution to give you admin access
-- Replace the email with your actual email once you sign up

-- Note: You'll need to run this manually with your actual user ID after signing up
-- For now, let's create a function to easily promote users to admin

CREATE OR REPLACE FUNCTION public.promote_user_to_admin(_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _user_id UUID;
BEGIN
  -- Get user ID from email
  SELECT id INTO _user_id 
  FROM auth.users 
  WHERE email = _email;
  
  IF _user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Insert admin role (will be ignored if already exists due to unique constraint)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN TRUE;
END;
$$;