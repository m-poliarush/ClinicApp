using Application.Models;
using AutoMapper;
using DomainData.UoW;


namespace Application.Services
{
    public class UsersService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public UsersService(IUnitOfWork UoW, IMapper mapper) {
            _unitOfWork = UoW;
            _mapper = mapper;
        }

        public IEnumerable<UserModel> GetAll()
        {
            var result = _unitOfWork.UsersRepository.GetAll().Select(x => _mapper.Map<UserModel>(x));
            return result;
        }
        public UserModel GetById(int id) {
            try
            {
                var result = _mapper.Map<UserModel>(_unitOfWork.UsersRepository.GetById(id));
                return result;

            }
            catch (Exception e) {
                throw new IndexOutOfRangeException("Wrong id");
            }
        }
        public IEnumerable<DoctorModel> GetDoctorsbyUser(int userId)
        {
            var doctorIdList = _unitOfWork.AppointmentsRepository.GetAll().Where(x => x.UserId == userId).Select(x => { return _unitOfWork.AppointmentsRepository.GetById(x.DoctorId); });
            return doctorIdList.Select(x => { return _mapper.Map<DoctorModel>(x); });
        }

    }
}
