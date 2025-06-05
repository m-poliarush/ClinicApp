using Application.Models;
using Application.Services;
using Application.Services.Interfaces;
using AutoMapper;
using DTOs;
using Microsoft.AspNetCore.Mvc;

namespace ClinicAppWebApi.Controllers
{
    [ApiController]
    [Route("Doctors")]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorsService _doctorsService;
        private readonly IMapper _mapper;

        public DoctorsController(IDoctorsService doctorsService, IMapper mapper)
        {
            _doctorsService = doctorsService;
            _mapper = mapper;
        }
        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var userModels = _doctorsService.GetAll();
            var result = userModels.Select(x => _mapper.Map<DoctorDTO>(x));
            return Ok(result);
        }
        [HttpGet("{id}")]
        public IActionResult GetbyId(int id)
        {
            try
            {
                var userModel = _doctorsService.GetById(id);
                if (userModel != null)
                    return Ok(_mapper.Map<UserDTO>(userModel));
                return BadRequest("Лікаря не знайдено");
            }
            catch (Exception ex)
            {
                return BadRequest("Лікаря не знайдено");
            }
        }
        [HttpPost("Update")]
        public IActionResult UpdateDoctor([FromBody] DoctorDTO doctor)
        {
            var userModel = _mapper.Map<DoctorModel>(doctor);
            try
            {
                _doctorsService.Update(userModel);
            }
            catch (Exception ex)
            {
                return BadRequest("Лікаря не знайдено");
            }
            return Ok();
        }
        [HttpDelete("Delete{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            try
            {
                var user = _doctorsService.GetById(id);
                if (user != null)
                {
                    _doctorsService.Delete(id);
                    return Ok();
                }
                return BadRequest("Лікаря не знайдено");
            }
            catch (Exception ex)
            {
                return BadRequest("Лікаря не знайдено");
            }
        }


    }
}
