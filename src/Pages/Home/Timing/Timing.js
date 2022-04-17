import React from 'react';
import './Timing.css'

const Timing = () => {
    return (
        <div className='timing-container'>
            <div className='container content-container d-flex justify-content-center w-25 my-4'>

                <div className='pt-2  mx-2 my-2 '>
                    <div className='table-container'>
                        <table class="table table-bordered table-hover table-dark table-responsive">
                            <tbody>
                                <tr>
                                    <th scope="col">Monday</th>
                                    <td>10.00/13.00<span className='custom-clr'>**</span>/14.00<span className='custom-clr'>*</span></td>
                                    <td>15.00-18.00</td>

                                </tr>
                                <tr>
                                    <th scope="col">Tuesday</th>
                                    <td>10.00-12.00</td>
                                    <td>15.00-16.00</td>

                                </tr>
                                <tr>
                                    <th scope="row">Wednesday</th>
                                    <td colspan="2" className='text-center'>10.00- 14.00<span className='custom-clr'>**</span>/15.00<span className='custom-clr'>*</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">Thursday</th>
                                    <td className='text-center'>10.00- 12.00<span className='custom-clr'>**</span>/15.00<span className='custom-clr'>*</span></td>
                                    <td>14.00-16.00<span className='custom-clr'>**</span>/17.00<span className='custom-clr'>*</span> </td>
                                </tr>
                                <tr>
                                    <th scope="row">Friday</th>
                                    <td colspan="2" className='text-center'>10.00- 14.00<span className='custom-clr'>**</span>/15.00<span className='custom-clr'>**</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='text-center text-white status-container ' style={{ marginBottom: '40px' }} >
                        <small>
                            Status : <span className='custom-clr'>**</span> Old Week
                        </small>
                        <small className='px-2'>
                            <span className='custom-clr '>*</span>
                            Even Week
                        </small>
                    </div>
                </div>

                {/* Another container  */}
                <div className='mx-4 d-flex pt-2 text-container'>
                    <div>
                        <h2 className='text-white'><span className='custom-clr'>MY</span> <br />Training <br />SCHEDULE</h2>
                        <small className='text-white'>All my courses are <br /> being held weekly in the <br />following days and hours</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timing;