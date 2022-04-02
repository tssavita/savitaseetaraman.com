import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Savita Seetaraman</title>
      </Head>
     <article>
        <h1 className={utilStyles.headingXl}>LeetCode Streak Challenge - Day 1/30 - Reverse list</h1>
        I have decided to keep up a 30 day streak on LeetCode starting today. The idea is to be consistent, so I will start with 2 problems per day.
        <h2>Problem 1: Reversing a list</h2>

        <p>
        Today's daily challenge question was about reversing lists. This topic has been discussed to 
        death in many forums already. But I have found that trying to reproduce what I learnt/read, 
        helps increase the retain the piece of information for longer in memory. Also I want to try 
        and keep notes for each problem I solve so that I can revisit them later.
        
        There are different ways to go about reversing a list in Python:
        <ol>
        <li><code>list.reverse()</code> -
        <ul> 
          <li>Reversing is done in place - It does not create a new object and reverse it. Instead 
            it modifies the original copy.</li>
          <li>The function does not return the modified list. We cannot assign the returned value 
            of the function to a variable. The return value is None.</li>
          <li>Another term for operating in place is side-effect.</li>
          <li>Time complexity - O(n) where n is the number of elements in the list.</li>
          <li>Space complexity - O(n).</li>
        </ul>
        </li>
        <li><code>reversed(list)</code> -
        <ul>
          <li>It returns an iterator that allows traversing the list in reverse order.</li>
          <li>We can call a list on the returned iterator to get the reversed list.</li>
          <li>Any changes to the original list will impact the iterator because the iterator points 
            to the same list and not a copy.</li>
          <li>Time complexity - O(n) where n is the number of elements in the list.</li>
          <li>Space complexity - O(n).</li>
        </ul>
        </li>
        <li>Swap the first element with the last, the second element with the second last, and so on.
        <ul>
          <li>Time complexity - O(n).</li>
          <li>Space complexity - O(n).</li>
        </ul>
        </li>
        <li>Slicing 
        <ul>
          <li><code>list[start:stop:step].</code> The default value of step is one, which allows 
          the slicing to extract items from start to stop-1 from left to right. Setting the step 
          to -1 returns the objects in reverse order.</li>
          <li>It returns a reversed copy of the list.</li>
          <li>Time complexity - O(n).</li>
          <li>Space complexity - O(n).</li>
        </ul>
        </li>
        <li>Loops
          <ul>
            <li>We can loop through the list in reverse order and copy each element to a new list. 
              Needless to say, this is not in place.</li>
            <li>Time complexity - O(n).</li>
            <li>Space complexity - O(n).</li>
          </ul>
        </li>
      </ol>
      For methods 4 - 5, we can also use recursion. In this case, the Space complexity will include 
      the Stack space which will be O(n). The maximum number of elements present in stack will be 
      the size of the list, n.
</p>
      </article>
    </Layout>
  )
}
