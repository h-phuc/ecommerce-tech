import React, { useCallback, useEffect, useState } from 'react';
import logo from '/images/logo.png';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import path from '../../utils/path.util';
import { Button, InputField } from '../../components';
import { apiResetPassword } from '../../apis/users.api';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const resetPayload = () => {
    setPayload({
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handleForgotPassword = useCallback(async () => {
    const { newPassword, confirmPassword } = payload;
    if (newPassword !== confirmPassword) {
      toast.error('Password not match');
    } else {
      const response = await apiResetPassword({
        password: payload.newPassword,
        token,
      });
      if (response.success) {
        toast.success(response.message);
        resetPayload();
        navigate(`/${path.LOGIN}`);
      } else {
        toast.error(response.message);
      }
    }
  }, [payload, token]);

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to={`/${path.HOME}`} className="mb-[100px]">
          <img src={logo} alt="logo" className="w-[234px] object-contain" />
        </Link>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Reset password
            </h1>
            <div className="space-y-4 md:space-y-6">
              <InputField
                type="password"
                value={payload.newPassword}
                setValue={setPayload}
                nameKey="newPassword"
                placeholder="New Password"
              />

              <InputField
                type="password"
                value={payload.confirmPassword}
                setValue={setPayload}
                nameKey="confirmPassword"
                placeholder="Confirm Password"
              />

              <Button
                name="Submit"
                handleOnClick={handleForgotPassword}
                style="w-full px-4 py-2 text-white bg-main hover:bg-red-700 font-medium rounded-lg text-sm  text-center"
              />

              <Link
                to={`/${path.LOGIN}`}
                className="font-medium text-sm text-black hover:underline"
              >
                Go Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
