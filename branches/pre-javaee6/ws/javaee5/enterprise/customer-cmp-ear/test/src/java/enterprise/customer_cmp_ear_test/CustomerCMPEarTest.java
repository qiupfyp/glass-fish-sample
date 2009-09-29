/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 1997-2007 Sun Microsystems, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common Development
 * and Distribution License("CDDL") (collectively, the "License").  You
 * may not use this file except in compliance with the License. You can obtain
 * a copy of the License at https://glassfish.dev.java.net/public/CDDL+GPL.html
 * or glassfish/bootstrap/legal/LICENSE.txt.  See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * When distributing the software, include this License Header Notice in each
 * file and include the License file at glassfish/bootstrap/legal/LICENSE.txt.
 * Sun designates this particular file as subject to the "Classpath" exception
 * as provided by Sun in the GPL Version 2 section of the License file that
 * accompanied this code.  If applicable, add the following below the License
 * Header, with the fields enclosed by brackets [] replaced by your own
 * identifying information: "Portions Copyrighted [year]
 * [name of copyright owner]"
 *
 * Contributor(s):
 *
 * If you wish your version of this file to be governed by only the CDDL or
 * only the GPL Version 2, indicate your decision by adding "[Contributor]
 * elects to include this software in this distribution under the [CDDL or GPL
 * Version 2] license."  If you don't indicate a single choice of license, a
 * recipient has the option to distribute your version of this file under
 * either the CDDL, the GPL Version 2 or to extend the choice of license to
 * its licensees as provided above.  However, if you add GPL Version 2 code
 * and therefore, elected the GPL Version 2 license, then the option applies
 * only if the new code is made subject to such option by the copyright
 * holder.
 */

/**
 *
 * @author Rahul Biswas
 */

package enterprise.customer_cmp_ear_test;

import junit.framework.Assert;
import org.junit.*;

import javax.naming.InitialContext;
import javax.ejb.EJB;
import enterprise.customer_cmp_ejb.ejb.session.CustomerSessionRemote;
import enterprise.customer_cmp_ejb.persistence.*;

public class CustomerCMPEarTest {
    
    /** Creates a new instance of CustomerCMPEarTest */
    public CustomerCMPEarTest() {
    }
    
    private String CUSTOMER_ID="99999";
    @Test public void testCustomerSample() {
	try {
		InitialContext ic = new InitialContext();

                String CUSTOMER_ID=String.valueOf(System.currentTimeMillis());
                
                CustomerSessionRemote sess = (CustomerSessionRemote)ic.lookup("enterprise.customer_cmp_ejb.ejb.session.CustomerSessionRemote");
                
                System.out.println("Adding new customer with id:"+CUSTOMER_ID);
                Customer customer = new Customer(CUSTOMER_ID, "Rahul", "Biswas");
                sess.persist(customer);
                
                System.out.println("Searching for customer with id:"+CUSTOMER_ID);
                Customer searchedCustomer= sess.searchForCustomer(CUSTOMER_ID);
		
                Assert.assertNotNull(searchedCustomer);
                
	} catch(Exception e) {
		e.printStackTrace();
		Assert.fail("encountered exception in CustomerCMPEarTest:testCustomerSample");
	}
  }

}
