using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using murphy.vpo.API.DTOs;
using murphy.vpo.BAL.Abstract;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentService _paymentService;
        private readonly IMapper _mapper;

        public PaymentsController(IPaymentService paymentService, IMapper mapper)
        {
            _paymentService = paymentService;
            _mapper = mapper;
        }

        [HttpGet(Name = "GetPaymentsAsync")]
        public async Task<ActionResult<List<PaymentDto>>> GetCompanysAsync()
        {
            var payments = await _paymentService.GetAllAsync();
            if (payments == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IList<PaymentDto>>(payments));

        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetPaymentByIdAsync")]
        public async Task<ActionResult<UserDto>> GetPaymentByIdAsync(int id)
        {
            var payment = await _paymentService.GetByIdAsync(id);
            if (payment == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<PaymentDto>(payment));
        }
        // POST api/values
        [HttpPost(Name = "AddPaymentAsync")]
        public async Task<ActionResult<PaymentDto>> AddPaymentAsync(PaymentDto paymentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var payment = _mapper.Map<Payment>(paymentDto);

            await _paymentService.AddAsync(payment);
            return CreatedAtRoute("GetPaymentByIdAsync", new { id = payment.Id }, _mapper.Map<PaymentDto>(payment));
        }

        // PUT api/values/5
        [HttpPut("{id}", Name = "UpdatePaymentAsync")]
        public async Task<ActionResult<PaymentDto>> UpdatePaymentAsync(int id, [FromBody] PaymentDto paymentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            if (id != paymentDto.id)
            {
                return BadRequest();
            }
            var vehicleToBeUpdate = await _paymentService.GetByIdAsync(id);
            if (vehicleToBeUpdate == null)
            {
                return NotFound();
            }

            var payment = _mapper.Map<Payment>(paymentDto);
            await _paymentService.UpdateAsync(payment);
            return NoContent();

        }

        // DELETE api/values/5
        [HttpDelete("{id}", Name = "RemovePaymentAsync")]
        public async Task<ActionResult> RemovePaymentAsync(int id)
        {
            var paymentToBeDelete = await _paymentService.GetByIdAsync(id);

            if (paymentToBeDelete == null)
            {
                return NotFound();
            }
            await _paymentService.DeleteAsync(id);

            return NoContent();
        }
    }
}
